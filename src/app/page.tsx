'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [inputVal, setInputVal] = useState('');
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <div className="bg-zinc-200 h-screen w-screen flex justify-center items-center">
      <div className="bg-white flex flex-col h-52 w-96 rounded-md p-4 gap-4">
        <div>
          <h1 className="text-black font-bold text-2xl">Enter your name: </h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            className="text-black rounded-md border-2 mb-4 h-10"
            type="text"
            placeholder="Type your name"
            onChange={e => setInputVal(e.target.value)}
            value={inputVal}
          />
          <button type="submit" className="text-black bg-blue-500 rounded-lg h-10 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
