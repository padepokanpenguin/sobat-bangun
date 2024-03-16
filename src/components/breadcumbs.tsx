export default function BreadCumbs() {
  return (
    <div className='container my-6 mx-auto bg-white p-4 lg:p-0 flex items-center flex-wrap'>
      <ul className='flex items-center'>
        <li className='inline-flex items-center'>
          <a
            href='#'
            className='text-[#F94355] font-semibold text-sm hover:text-gray-400'
          >
            Home
          </a>

          <svg
            className='w-5 h-auto fill-current mx-2 text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z' />
          </svg>
        </li>

        <li className='inline-flex items-center'>
          <a
            href='#'
            className='text-[#F94355] font-semibold text-sm hover:text-gray-400'
          >
            Layanan Desain
          </a>

          <svg
            className='w-5 h-auto fill-current mx-2 text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z' />
          </svg>
        </li>

        <li className='inline-flex items-center'>
          <a
            href='#'
            className='text-gray-600 hover:text-[#F94355] font-semibold text-sm'
          >
            Omah Apik 3
          </a>
        </li>
      </ul>
    </div>
  );
}
