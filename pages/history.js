import Head from 'next/head';
import Nav from '../components/Nav';
import { getTrackers } from '../components/services';

export default function History({ data }) {
	return (
		<div>
			<Head>
				<title>Gym Tracker</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='py-4 px-4 lg:py-10 lg:px-10 w-full'>
				<Nav />
				<section className='flex justify-center'>
					<div className='px-4 py-2 border rounded-lg w-full lg:w-2/4'>
						<div className='border-b h-8 mb-4'>
							<h3 className='text-gray-700'>History</h3>
						</div>
						<ul>
							{data.records.length > 0 ? (
								data.records.map((record) => (
									<li
										key={record.id}
										className='h-auto border rounded-sm px-4 py-2 mb-2'
									>
										<p className='text-sm text-gray-500 mb-2'>
											{record.description}
										</p>
										<p className='text-xs text-gray-500 mb-2'>
											{record.created_on.slice(0, 10)}
										</p>
									</li>
								))
							) : (
								<p className='text-sm text-gray-500 mb-2 text-center'>
									You currently do not have any data in your
									tracker!.
								</p>
							)}
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
}

export async function getServerSideProps() {
	const response = await getTrackers().then((resp) => resp);
	const data = await response.json();

	return { props: { data } };
}
