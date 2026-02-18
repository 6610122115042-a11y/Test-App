"use client";
import React, { useState } from 'react';

export default function Home() {
  const [activities, setActivities] = useState<{ id: number; text: string; time: string }[]>([]);
  const [inputTask, setInputTask] = useState("");
  const [inputTime, setInputTime] = useState("");

  const addActivity = () => {
    if (inputTask && inputTime) {
      setActivities([...activities, { id: Date.now(), text: inputTask, time: inputTime }]);
      setInputTask("");
      setInputTime("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex min-h-[600px] w-full max-w-xl flex-col items-center bg-white p-8 shadow-xl rounded-2xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-white">Daily Life Tracker</h1>
          <p className="text-zinc-500 mt-2">บันทึกทุกก้าวเดินของเวลาในวันนี้</p>
        </header>

        {/* ส่วน Input กิจกรรม */}
        <div className="flex flex-col w-full gap-3 mb-8">
          <input 
            type="text" 
            placeholder="กำลังทำอะไรอยู่?" 
            className="w-full p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
          <div className="flex gap-2">
            <input 
              type="time" 
              className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white flex-1"
              value={inputTime}
              onChange={(e) => setInputTime(e.target.value)}
            />
            <button 
              onClick={addActivity}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              เพิ่ม
            </button>
          </div>
        </div>

        {/* ส่วนแสดงผลกิจกรรม */}
        <div className="w-full space-y-4 overflow-y-auto pr-2">
          {activities.length === 0 ? (
            <p className="text-center text-zinc-400 italic">ยังไม่มีกิจกรรมที่บันทึก...</p>
          ) : (
            activities.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700">
                <div>
                  <span className="font-mono text-blue-600 dark:text-blue-400 font-bold mr-3">{item.time}</span>
                  <span className="text-zinc-700 dark:text-zinc-200">{item.text}</span>
                </div>
                <button 
                  onClick={() => setActivities(activities.filter(a => a.id !== item.id))}
                  className="text-red-400 hover:text-red-600 transition-colors"
                >
                  ลบ
                </button>
              </div>
            ))
          )}
        </div>

      </main>
    </div>
  );
}