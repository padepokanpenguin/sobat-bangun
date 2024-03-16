interface BreadCumbsProps {
  params: string;
}

export default function BreadCumbs({ params }: BreadCumbsProps) {
  const path = params.split('/');

  return (
    <div className='container my-6 mx-auto bg-white p-4 lg:p-0 flex items-center flex-wrap'>
      <ul className='flex items-center'>
        {path.map((item, i) => (
          <li key={i} className='inline-flex items-center'>
            <a
              className={` font-semibold text-sm ${path.length - 1 === i ? 'text-gray-600 hover:text-[#F94355]' : 'text-[#F94355] hover:text-gray-400'}`}
              href={item}
            >
              {item
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </a>{' '}
            <svg
              className={`w-5 h-auto fill-current mx-2 text-gray-400 ${path.length - 1 === i ? 'hidden' : ''}`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z' />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}
