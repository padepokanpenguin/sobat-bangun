import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='mt-10 bg-[#012846] text-white px-6 py-5 lg:py-10 lg:px-16'>
      <div className='container lg:mx-auto '>
        {/*  */}
        <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between w-full'>
          <div className=' lg:basis-1/2'>
            <div>
              <Image
                src={'/white-logo.png'}
                width={169}
                height={47}
                alt='logo'
              />
            </div>
            <p className='mt-4 text-sm lg:text-base text-justify lg:text-left'>
              SobatBangun adalah platform digital dari SIG yang bergerak dengan
              misi mengembangkan proses pembangunan dan renovasi rumah secara
              lebih baik serta berkelanjutan.
            </p>
            <div className='mt-2 flex gap-2 items-center'>
              <svg
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z'
                    fill='#fff'
                  ></path>{' '}
                </g>
              </svg>
              <a className='underline' href='mailto:sobat@sobatbangum.com'>
                sobat@sobatbangum.com
              </a>
            </div>
            <div className='mt-7'>
              <h3 className='text-sm lg:text-base'>Sosial Media :</h3>
              <div className='mt-4 flex gap-3'>
                <div className='flex justify-center items-center bg-[#2C373E] rounded-full h-[50px] w-[50px]'>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                        fill='#fff'
                      ></path>{' '}
                      <path
                        d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
                        fill='#fff'
                      ></path>{' '}
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z'
                        fill='#fff'
                      ></path>{' '}
                    </g>
                  </svg>
                </div>
                <div className='flex justify-center items-center bg-[#fff] rounded-full h-[50px] w-[50px]'>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='-5 0 20 20'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#000000'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <title>facebook [#2C373Eff]</title>{' '}
                      <desc>Created with Sketch.</desc> <defs> </defs>{' '}
                      <g
                        id='Page-1'
                        stroke='none'
                        stroke-width='1'
                        fill='none'
                        fill-rule='evenodd'
                      >
                        {' '}
                        <g
                          id='Dribbble-Light-Preview'
                          transform='translate(-385.000000, -7399.000000)'
                          fill='#2C373E'
                        >
                          {' '}
                          <g
                            id='icons'
                            transform='translate(56.000000, 160.000000)'
                          >
                            {' '}
                            <path
                              d='M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z'
                              id='facebook-[#2C373Eff]'
                            >
                              {' '}
                            </path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                </div>
                <div className='flex justify-center items-center bg-[#fff] rounded-full h-[50px] w-[50px]'>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='0 -3 20 20'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#000000'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <title>youtube [#333333]</title>{' '}
                      <desc>Created with Sketch.</desc> <defs> </defs>{' '}
                      <g
                        id='Page-1'
                        stroke='none'
                        stroke-width='1'
                        fill='none'
                        fill-rule='evenodd'
                      >
                        {' '}
                        <g
                          id='Dribbble-Light-Preview'
                          transform='translate(-300.000000, -7442.000000)'
                          fill='#333333'
                        >
                          {' '}
                          <g
                            id='icons'
                            transform='translate(56.000000, 160.000000)'
                          >
                            {' '}
                            <path
                              d='M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289'
                              id='youtube-[#333333]'
                            >
                              {' '}
                            </path>{' '}
                          </g>{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:basis-1/4'>
            <h4 className='font-bold text-lg lg:text-xl'>Produk & Layanan</h4>
            <ul className='space-y-2 text-sm lg:text-base mt-6'>
              <li>Renovasi</li>
              <li>Bangun Rumah</li>
              <li>Layanan Desain</li>
              <li>Teknologi Tambahan</li>
              <li>Beli Material</li>
            </ul>
          </div>
          <div className='lg:basis-1/4'>
            <h4 className='font-bold text-lg lg:text-xl'>Tentang Kami</h4>
            <ul className='space-y-2 text-sm lg:text-base mt-6'>
              <li>Tentang SobatBangun</li>
              <li>Kebijakan Dan Privasi</li>
              <li>Syarat Dan Ketentuan</li>
              <li>FAQ</li>
              <li>Daftar Menjadi Mitra</li>
            </ul>
          </div>
        </div>
        {/* Bank */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h6 className='text-base font-semibold'>Kredit Bangun Rumah</h6>
            <div className='flex space-x-2'>
              <Image
                src={'/bank/mandiri.png'}
                width={56}
                height={56}
                alt='mandiri'
              />
              <Image src={'/bank/btn.png'} width={56} height={56} alt='btn' />
              <Image src={'/bank/bni.png'} width={56} height={56} alt='bni' />
            </div>
          </div>
          <div>
            <h6 className='text-base font-semibold'>Tunai Via Bank Transfer</h6>
            <div className='flex space-x-2'>
              <Image
                src={'/bank/mandiri.png'}
                width={56}
                height={56}
                alt='mandiri'
              />
              <Image src={'/bank/bri.png'} width={56} height={56} alt='bri' />
              <Image src={'/bank/bni.png'} width={56} height={56} alt='bni' />
              <Image
                src={'/bank/permata.png'}
                width={56}
                height={56}
                alt='permata'
              />
            </div>
          </div>
          <div>
            <h6 className='text-base font-semibold'>Kartu Kredit</h6>
            <div className='flex space-x-2'>
              <Image src={'/bank/visa.png'} width={56} height={56} alt='visa' />
              <Image
                src={'/bank/master-card.png'}
                width={56}
                height={56}
                alt='master-card'
              />
              <Image src={'/bank/jcb.png'} width={56} height={56} alt='jcb' />
            </div>
          </div>
          <div>
            <h6 className='text-base font-semibold'>
              Rekan Teknologi Tambahan
            </h6>
            <div className='flex space-x-2'>
              <Image src={'/bank/asco.png'} width={56} height={56} alt='asco' />
              <Image
                src={'/bank/ineco-solar.png'}
                width={56}
                height={56}
                alt='ineco-scolar'
              />
              <Image
                src={'/bank/adidaya.png'}
                width={56}
                height={56}
                alt='adidaya'
              />
              <Image src={'/bank/agra.png'} width={56} height={56} alt='agra' />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-14 flex flex-col gap-2 sm:gap-0 sm:flex-row  w-full sm:justify-between sm:items-center'>
          <div className='flex gap-4 items-center'>
            <p className='text-sm lg:text-base'>Powered By:</p>
            <Image
              src={'/logo-sig.png'}
              width={71}
              height={41}
              alt='sig-logo'
            />
          </div>
          <p>Copyright © 2023 SobatBangun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
