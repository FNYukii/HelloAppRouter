import Image from "next/image"

function page() {

	const spots = [
		{
			id: "dfakjhgkurhknvmjagje",
			spotName: "虎ノ門ヒルズ",
			imageUrls: ["https://firebasestorage.googleapis.com/v0/b/reactperformancecomperison2.appspot.com/o/images%2FIMG_4603.jpg?alt=media&token=8f0c1422-9263-4f1d-8714-0b9a35f2b8dd"]
		},
		{
			id: "yegjatfibekjyyuhbmah",
			spotName: "麻布台ヒルズ",
			imageUrls: ["https://firebasestorage.googleapis.com/v0/b/reactperformancecomperison2.appspot.com/o/images%2FIMG_4622_19.jpg?alt=media&token=818fc816-555b-4d60-9cb4-06c18e60b66d"]
		},
		{
			id: "yuhkuyihbkfajbkugyi",
			spotName: "六本木ヒルズ",
			imageUrls: ["https://source.unsplash.com/random/?city"]
		},
		{
			id: "nvkajghekughakjhku",
			spotName: "愛宕グリーンヒルズ",
			imageUrls: ["https://source.unsplash.com/random/?city"]
		},
	]

	return (

		<main className='mt-4 w-full mx-auto px-4 lg:width-lg lg:px-0'>

			<h1 className="mt-2 text-2xl font-bold">Spots</h1>

			<div className="mt-2 grid grid-cols-3 gap-x-4 gap-y-8">

				{spots.map((spot, index) => (

					<div key={index}>

						{spot.imageUrls.map((imageUrl, index) => (

							<div key={index} className="relative aspect-video object-cover bg-gray-300 hover:brightness-90 transition cursor-pointer">

								<Image src={imageUrl} alt={spot.spotName} fill />
							</div>
						))}

						<div className="mt-2 flex justify-between">
							<p className="hover:underline cursor-pointer">{spot.spotName}</p>
							<p className="text-gray-500">2023/11/10</p>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}

export default page