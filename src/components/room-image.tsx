import Image from 'next/image';

interface RoomImageProps {
  room: string;
  width: string;
  roomImage: string;
}

export default function RoomImage({ room, width, roomImage }: RoomImageProps) {
  return (
    <div className='p-4 border border-gray-300 rounded-lg'>
      <div className='flex w-full justify-center'>
        <Image
          className='w-full object-cover rounded-sm'
          src={roomImage}
          width={261}
          height={201}
          alt='product'
        />
      </div>
      <div>
        <div className='mt-6'>
          <h4 className='font-bold text-xl'>{room}</h4>
          <p className='text-sm'>{width}</p>
        </div>
      </div>
    </div>
  );
}
