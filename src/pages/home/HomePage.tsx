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
import PeopleSix from '@/assets/people_6.svg?react';
import PeopleThree from '@/assets/people_3.svg?react';
import PeopleFive from '@/assets/people_5.svg?react';
import PeopleFour from '@/assets/people_4.svg?react';

import { CustomCarousel } from '@/components/Carousel';
import { motion } from 'framer-motion';

const transition = { type: 'keyframes', duration: 5 };
export default function HomePage() {
	return (
		<div className="h-full @container">
			<div className="  ">
				<div className=" h-full flex flex-col justify-end items-center">
					<div className="flex-grow ">
						<div className="flex items-center justify-center h-full mt-20 mb-20">
							<Fraza className="h-[50px] @[300px]:h-[60px] @[400px]:h-[70px] @[500px]:h-[70px] @[700px]:h-[80px] @[900px]:h-[100px] @[1000px]:h-[110px]  " />
						</div>
					</div>
					<div className="flex ">
						<motion.div
							initial={{ opacity: 0, x: '-100%', y: 0 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							transition={transition}
						>
							<PeopleSix className="h-[153px] @[300px]:h-[205px] @[400px]:h-[305px] @[500px]:h-[376px] @[700px]:h-[458px] @[900px]:h-[507px] @[1000px]:h-[507px]  " />
						</motion.div>

						<PeopleFour className="h-[150px] @[300px]:h-[200px] @[400px]:h-[300px] @[500px]:h-[370px] @[700px]:h-[450px] @[900px]:h-[500px] @[1000px]:h-[500px]  " />
						<motion.div
							initial={{ opacity: 0, x: '100%', y: 0 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							transition={transition}
						>
							<PeopleFive className="h-[155px] @[300px]:h-[210px] @[400px]:h-[310px] @[500px]:h-[383px] @[700px]:h-[465px] @[900px]:h-[520px] @[1000px]:h-[520px]  " />
						</motion.div>
					</div>
				</div>
			</div>
			<div className=" mt-10 mb-20  @[900px]:mb-0">
				<div className="mt-10">
					<Logo className="h-[50px] @[300px]:h-[60px] @[400px]:h-[70px] @[500px]:h-[70px] @[700px]:h-[80px] @[900px]:h-[100px] @[1000px]:h-[150px]  " />
				</div>
				<div className="grid grid-cols-1 @[900px]:grid-cols-2  ">
					<div className="">
						<div className="mt-6">
							<TitleOne className="mb-6 h-[40px] @[300px]:h-[40px] @[400px]:h-[40px] @[500px]:h-[50px] @[700px]:h-[60px] @[900px]:h-[70px] @[1000px]:h-[70px]  " />
							<p className="text-sm @[300px]:text-base @[400px]:text-base @[500px]:text-lg @[700px]:text-xl @[900px]:text-2xl @[1100px]:text-3xl @[1200px]:text-3xl  text-balance  font-medium pr-5">
								Волонтёрское движение Колледжа декоративно-прикладного искусства им.
								Карла Фаберже объединяет студентов, преподавателей и сотрудников,
								которые стремятся внести свой вклад в общественное благо. Наша
								миссия заключается в развитии и поддержке духовных, нравственных и
								культурных ценностей через активное участие в различных волонтёрских
								проектах и инициативах.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 @[500px]:grid-cols-2 gap-10 mt-10 ">
						<div className="grid grid-rows-2 gap-5">
							<div className="h-[250px]">
								<img
									src="/1.png"
									className="object-cover h-full w-full object-center rounded-3xl"
								/>
							</div>
							<div className="h-[250px]  ">
								<img
									src="/3.png"
									className="object-cover h-full w-full object-center rounded-3xl"
								/>
							</div>
						</div>

						<div className="hidden h-[520px]   @[500px]:inline-flex">
							<img
								src="/2.png"
								className="object-cover  h-full w-full object-center rounded-3xl"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className=" mb-20 mt-20">
				<div>
					<TitleTwo className=" h-[50px] @[300px]:h-[60px] @[400px]:h-[70px] @[500px]:h-[70px] @[700px]:h-[80px] @[900px]:h-[100px] @[1000px]:h-[110px]  " />
				</div>

				<div className="flex items-center  justify-center mt-10">
					<div className="grid auto-rows-fr  gap-10 @[1000px]:grid-cols-3 grid-cols-2 ">
						<div className=" flex flex-col  items-center justify-center">
							<IconOne className="h-[70px] @[300px]:h-[70px] @[400px]:h-[80px] @[500px]:h-[100px] @[700px]:h-[120px] @[900px]:h-[150px] @[1000px]:h-[150px]  " />
							<p className="text-sm @[300px]:text-base @[400px]:text-base @[500px]:text-base @[700px]:text-lg @[900px]:text-xl @[1000px]:text-xl text-center w-[200px] text-balance  font-medium">
								Проведением открытых уроков
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<IconTwo className="h-[70px] @[300px]:h-[70px] @[400px]:h-[80px] @[500px]:h-[100px] @[700px]:h-[120px] @[900px]:h-[150px] @[1000px]:h-[150px]  " />
							<p className="text-sm @[300px]:text-base @[400px]:text-base @[500px]:text-base @[700px]:text-lg @[900px]:text-xl @[1000px]:text-xl text-center text-balance  font-medium">
								Помощью в приютах для бездомных животных
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<IconThree className="h-[70px] @[300px]:h-[70px] @[400px]:h-[80px] @[500px]:h-[100px] @[700px]:h-[120px] @[900px]:h-[150px] @[1000px]:h-[150px]  " />
							<p className="text-sm @[300px]:text-base @[400px]:text-base @[500px]:text-base @[700px]:text-lg @[900px]:text-xl @[1000px]:text-xl text-center text-balance  font-medium">
								Помощью ветеранам Великой Отечественной войны
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<IconFour className="h-[70px] @[300px]:h-[70px] @[400px]:h-[80px] @[500px]:h-[100px] @[700px]:h-[120px] @[900px]:h-[150px] @[1000px]:h-[150px]  " />
							<p className="text-sm @[300px]:text-base @[400px]:text-base @[500px]:text-base @[700px]:text-lg @[900px]:text-xl @[1000px]:text-xl text-center text-balance  font-medium">
								Созданием открыток на разные мероприятия
							</p>
						</div>

						<div className="flex flex-col items-center justify-center">
							<IconFive className="h-[70px] @[300px]:h-[70px] @[400px]:h-[80px] @[500px]:h-[100px] @[700px]:h-[120px] @[900px]:h-[150px] @[1000px]:h-[150px]  " />
							<p className="text-sm @[300px]:text-base @[400px]:text-base @[500px]:text-base @[700px]:text-lg @[900px]:text-xl @[1000px]:text-xl w-[100px] text-center text-balance  font-medium">
								Высадкой деревьев
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<IconSix className="h-[70px] @[300px]:h-[70px] @[400px]:h-[80px] @[500px]:h-[100px] @[700px]:h-[120px] @[900px]:h-[150px] @[1000px]:h-[150px]  " />
							<p className="text-sm @[300px]:text-base @[400px]:text-base @[500px]:text-base @[700px]:text-lg @[900px]:text-xl @[1000px]:text-xl w-[150px] @[370px]:w-[250px] text-center text-balance  font-medium">
								Уборкой территории колледжа
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-20 mt-10">
				<div>
					<TitleThree className=" h-[50px] @[300px]:h-[60px] @[400px]:h-[70px] @[500px]:h-[70px] @[700px]:h-[80px] @[900px]:h-[100px] @[1000px]:h-[110px]  " />
				</div>
				<div className="flex flex-col items-center @[850px]:grid  @[850px]:grid-cols-3 gap-10 mt-10">
					<div className="@[850px]:h-[400px] @[850px]:w-full bg-[#F29073] rounded-2xl flex flex-col items-center justify-center p-10">
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
					<TitleFour className="h-[50px] @[300px]:h-[60px] @[400px]:h-[70px] @[500px]:h-[70px] @[700px]:h-[80px] @[900px]:h-[100px] @[1000px]:h-[110px]  " />
				</div>
				<div className="flex items-center mt-10">
					<CustomCarousel />
				</div>
			</div>

			<div className="min-h-screen flex flex-col relative ">
				<div className="flex-grow mt-10">
					<TitleFive className="h-[40px] @[300px]:h-[50px] @[400px]:h-[70px] @[500px]:h-[70px] @[700px]:h-[80px] @[900px]:h-[100px] @[1000px]:h-[110px]  " />
					<div className="flex  justify-center flex-col mt-20">
						<Logo height={200} />
						<div className="flex justify-center items-center gap-10">
							<Telegram className="h-[50px] @[300px]:h-[60px] @[400px]:h-[70px] @[500px]:h-[70px] @[700px]:h-[80px] @[900px]:h-[100px] @[1000px]:h-[110px]  " />
							<VK className="h-[50px] @[300px]:h-[60px] @[400px]:h-[70px] @[500px]:h-[70px] @[700px]:h-[80px] @[900px]:h-[100px] @[1000px]:h-[110px]  " />
						</div>
					</div>
				</div>

				<PeopleTwo className="hidden @[300px]:inline-flex h-0 @[500px]:h-[250px] @[700px]:h-[300px] @[900px]:h-[350px] @[1000px]:h-[350px] absolute bottom-0 " />
				<div className="flex items-center justify-center">
					<PeopleFour className="h-[350px]  @[300px]:h-[350px] @[400px]:h-[300px] @[500px]:h-[350px] @[700px]:h-[400px] @[900px]:h-[500px] @[1000px]:h-[500px] absolute bottom-0 @[500px]:right-0 " />
				</div>
			</div>
		</div>
	);
}
