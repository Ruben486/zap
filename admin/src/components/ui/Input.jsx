import { forwardRef} from 'react';

 export const Input = forwardRef((props,ref) => {
  return (
    <input
      {...props} 
      ref={ref}
      className='w-full bg-zinc-600 text-white px-4 py-2 mb-4 rounded-md focus: outline-none'
    />
  )
})

