'use client';

import { useState, useEffect, useRef } from 'react';

export function useSpeechToText(onResult: (text: string) => void) {
  const [listening, setListening] = useState(false);
  const [rawTranscript, setRawTranscript] = useState('');
  const [error, setError] = useState('');
  const silenceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError('Speech Recognition is not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join(' ');

      setRawTranscript(transcript);
      onResult(formatTranscript(transcript));

      resetSilenceTimer(recognition);
    };

    recognition.onend = () => {
      if (listening) {
        recognition.start();
      }
    };

    if (listening) {
      recognition.start();
      resetSilenceTimer(recognition);
    } else {
      recognition.stop();
      clearSilenceTimer();
    }

    return () => {
      recognition.stop();
      clearSilenceTimer();
    };
  }, [listening, onResult]);

  function resetSilenceTimer(recognition: any) {
    clearSilenceTimer();
    silenceTimer.current = setTimeout(() => {
      setListening(false);
      recognition.stop();
    }, 10000); // 10 seconds of silence = auto-stop
  }

  function clearSilenceTimer() {
    if (silenceTimer.current) {
      clearTimeout(silenceTimer.current);
      silenceTimer.current = null;
    }
  }

  return { listening, setListening, rawTranscript, error };
}

function formatTranscript(text: string): string {
  let formatted = text
    .replace(/\bnew paragraph\b/gi, '\n\n')
    .replace(/\bperiod\b/gi, '.')
    .replace(/\bcomma\b/gi, ',')
    .replace(/\bquestion mark\b/gi, '?')
    .replace(/\bexclamation mark\b/gi, '!')
    .replace(/\s+([.,!?])/g, '$1') // remove spaces before punctuation
    .replace(/([.!?])\s*(\w)/g, (_, punc, letter) => `${punc} ${letter.toUpperCase()}`) // capitalize after punctuation
    .replace(/^\s*\w/, (c) => c.toUpperCase()); // capitalize first word

  return formatted.trim();
}
