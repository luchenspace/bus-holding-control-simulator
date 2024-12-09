// •	X-axis: Red
// •	Y-axis: Green
// •	Z-axis: Blue

export function Legend() {
  return (
    <div className='fixed top-0 left-0 p-4'>
      <span className='text-orange-500'>x</span>
      <span className='text-green-500'>y</span>
      <span className='text-blue-500'>z</span>
    </div>
  );
}
