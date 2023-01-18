const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export function SummaryTable() {
  return (
    <div className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((weekDay, index) => {
          return (
            <div
              key={`${weekDay}-${index}`}
              className='text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center'
            >
              {weekDay}
            </div>
          );
        })}
      </div>
      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        <div className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg'></div>
      </div>
    </div>
  );
}
