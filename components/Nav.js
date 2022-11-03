import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
	const router = useRouter();
	return (
		<nav className='border-b-gray-300 h-10 border-b flex mb-6'>
			<img
				src='https://res.cloudinary.com/dtgbzmpca/image/upload/v1667430832/Gym-logo.png'
				alt='gym logo'
				className='mr-4'
			/>
			<Link
				href={'/'}
				className={`font-medium text-sm ml-4 ${
					router.pathname == '/'
						? 'border-b-[4px] border-teal-600 text-teal-600'
						: ''
				}  `}
			>
				Home
			</Link>
			<Link
				href={'/history'}
				className={`font-medium text-sm ml-4 ${
					router.pathname == '/history'
						? 'border-b-[4px] border-teal-600 text-teal-600'
						: ''
				}  `}
			>
				History
			</Link>
		</nav>
	);
}
