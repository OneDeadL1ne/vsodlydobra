import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export function CustomCarousel() {
	const plugin = React.useRef(Autoplay({ delay: 2000 }));
	const fotos = [
		{
			id: 1,
			children: (
				<img
					src="/Foto_1.jpg"
					className="object-cover h-full w-full object-center rounded-xl"
				/>
			),
		},
		{
			id: 2,
			children: (
				<img
					src="/Foto_2.jpg"
					className="object-cover h-full w-full object-center rounded-xl"
				/>
			),
		},
		{
			id: 3,
			children: (
				<img
					src="/Foto_3.jpg"
					className="object-cover h-full w-full object-center rounded-xl"
				/>
			),
		},
		{
			id: 4,
			children: (
				<img
					src="/Foto_4.jpg"
					className="object-cover h-full w-full object-center rounded-xl"
				/>
			),
		},
		{
			id: 5,
			children: (
				<img
					src="/Foto_5.jpg"
					className="object-cover h-full w-full object-center rounded-xl"
				/>
			),
		},
		{
			id: 6,
			children: (
				<img
					src="/Foto_6.jpg"
					className="object-cover h-full w-full object-center rounded-xl"
				/>
			),
		},
	];

	return (
		<Carousel
			plugins={[plugin.current]}
			opts={{ loop: true }}
			className="w-full max-w-7xl @container "
		>
			<CarouselContent>
				{fotos.map((item) => (
					<CarouselItem key={item.id} className="basis-2/3  @[1000px]:basis-1/3">
						<div className="p-1">
							<Card className="bg-transparent border-none shadow-none">
								<CardContent className="flex aspect-square items-center justify-center p-1">
									{item.children}
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
