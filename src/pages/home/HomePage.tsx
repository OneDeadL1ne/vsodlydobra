import Fraza from '@/assets/Fraza.svg?react';
import Logo from '@/assets/Logo.svg?react';
import TitleOne from '@/assets/Title_1.svg?react';
import TitleTwo from '@/assets/Title_2.svg?react';
import TitleThree from '@/assets/Title_3.svg?react';
import TitleFour from '@/assets/Title_4.svg?react';
import TitleFive from '@/assets/Title_5.svg?react';
import PeopleOne from '@/assets/people_1.svg?react';
import IconOne from '@/assets/icons/1.svg?react';
import IconTwo from '@/assets/icons/2.svg?react';
import IconThree from '@/assets/icons/3.svg?react';
import IconFour from '@/assets/icons/4.svg?react';
import IconFive from '@/assets/icons/5.svg?react';
import IconSix from '@/assets/icons/6.svg?react';
import Telegram from '@/assets/icons/TG.svg?react';
import VK from '@/assets/icons/VK.svg?react';

import PeopleTwo from '@/assets/people_2.svg?react';

import PeopleFour from '@/assets/people_4.svg?react';

import { CustomCarousel } from '@/components/Carousel';

export default function HomePage() {
	return (
		<div className="h-full @container">
			<div className="h-screen   ">
				<div className=" h-full flex flex-col justify-end items-center">
					<div className="mb-10">
						<Fraza height={100} />
					</div>

					<PeopleOne height={500} className="" />
				</div>
			</div>
			<div className="h-screen mt-10">
				<div className="mt-10">
					<Logo height={150} />
				</div>
				<div className="grid grid-cols-2">
					<div className="">
						<div className="mt-6">
							<TitleOne height={70} className="mb-6" />
							<p className="text-3xl text-balance  font-medium pr-5">
								Волонтёрское движение Колледжа декоративно-прикладного искусства им.
								Карла Фаберже объединяет студентов, преподавателей и сотрудников,
								которые стремятся внести свой вклад в общественное благо. Наша
								миссия заключается в развитии и поддержке духовных, нравственных и
								культурных ценностей через активное участие в различных волонтёрских
								проектах и инициативах.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-10 mt-10 ">
						<div className="grid grid-rows-2 gap-5">
							<div className="h-[250px]">
								<img
									src="/1.png"
									className="object-cover h-full w-full object-center rounded-3xl"
								/>
							</div>
							<div className="h-[250px] ">
								<img
									src="/3.png"
									className="object-cover h-full w-full object-center rounded-3xl"
								/>
							</div>
						</div>

						<div className="">
							<img
								src="/2.png"
								className="object-cover h-full w-full object-center rounded-3xl"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-20 mt-10">
				<div>
					<TitleTwo height={100} />
				</div>

				<div className="flex items-center  justify-center mt-10">
					<div className="grid auto-rows-fr  gap-10 grid-cols-3 ">
						<div className=" flex flex-col  items-center justify-center">
							<IconOne height={150} />
							<p className="text-xl text-center w-[200px] text-balance  font-medium">
								Проведением открытых уроков
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<IconTwo height={150} />
							<p className="text-xl text-center text-balance  font-medium">
								Помощью в приютах для бездомных животных
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<IconThree height={150} />
							<p className="text-xl text-center text-balance  font-medium">
								Помощью ветеранам Великой Отечественной войны
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<IconFour height={150} />
							<p className="text-xl text-center text-balance  font-medium">
								Созданием открыток на разные мероприяти
							</p>
						</div>

						<div className="flex flex-col items-center justify-center">
							<IconFive height={150} />
							<p className="text-xl w-[100px] text-center text-balance  font-medium">
								Высадкой деревьев
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<IconSix height={150} />
							<p className="text-xl w-[250px] text-center text-balance  font-medium">
								Уборкой территории колледжа
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-20 mt-10">
				<div>
					<TitleThree height={100} />
				</div>
				<div className="grid grid-cols-3 gap-10 mt-10">
					<div className="h-[400px] bg-[#F29073] rounded-2xl flex flex-col items-center justify-center p-10">
						<div className="h-[270px] w-full ">
							<img
								src="/Women_1.jpg"
								className="object-cover h-full w-full object-center rounded-2xl "
							/>
						</div>
						<p className="text-xl w-[250px] mt-3 text-center text-balance  font-medium text-white">
							Студентка группы ДЮ-1 Ксения Шумилова
						</p>
					</div>
					<div className="h-[400px] bg-[#F29073] rounded-2xl flex flex-col items-center justify-center p-10">
						<div className="h-[270px] w-full ">
							<img
								src="/Women_2.jpg"
								className="object-cover h-full w-full object-center rounded-xl"
							/>
						</div>
						<p className="text-xl w-[250px] mt-3 text-center   font-medium text-white">
							Студентка группы Л-2 Софья Андреева
						</p>
					</div>
					<div className="h-[400px] bg-[#F29073] rounded-2xl flex flex-col items-center justify-center p-10">
						<div className="h-[270px] w-full ">
							<img
								src="/Women_3.jpg"
								className="object-cover h-full w-full object-center rounded-xl"
							/>
						</div>
						<p className="text-xl w-[250px] mt-3 text-center text-balance  font-medium text-white">
							Студентка группы Р-3 Косткина Анастасия
						</p>
					</div>
				</div>
			</div>
			<div className="mb-20">
				<div>
					<TitleFour height={100} />
				</div>
				<div className="flex items-center mt-10">
					<CustomCarousel />
				</div>
			</div>

			<div className="min-h-screen flex flex-col relative ">
				<div className="flex-grow mt-10">
					<TitleFive height={100} />
					<div className="flex  justify-center flex-col mt-20">
						<Logo height={200} />
						<div className="flex justify-center items-center gap-10">
							<Telegram height={100} />
							<VK height={100} />
						</div>
					</div>
				</div>

				<PeopleTwo height={350} className="absolute bottom-0" />
				<PeopleFour height={500} className="absolute bottom-0 right-0" />
			</div>
		</div>
	);
}
