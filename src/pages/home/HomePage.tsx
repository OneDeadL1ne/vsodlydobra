import { motion } from 'framer-motion';
import Elem1 from '@/assets/elements/1.svg?react';
import Elem2 from '@/assets/elements/2.svg?react';
import Elem3 from '@/assets/elements/3.svg?react';
import Elem4 from '@/assets/elements/4.svg?react';
import Elem5 from '@/assets/elements/5.svg?react';
import Elem6 from '@/assets/elements/6.svg?react';
import Elem7 from '@/assets/elements/7.svg?react';
import Elem8 from '@/assets/elements/8.svg?react';
import Elem9 from '@/assets/elements/9.svg?react';
import Elem10 from '@/assets/elements/10.svg?react';
import Elem11 from '@/assets/elements/11.svg?react';
import Elem12 from '@/assets/elements/12.svg?react';
import Elem13 from '@/assets/elements/13.svg?react';
import Elem14 from '@/assets/elements/14.svg?react';
import Elem15 from '@/assets/elements/15.svg?react';
import Fraza from '@/assets/elements/Fraza.svg?react';
export default function HomePage() {
	const initial = { opacity: 0, x: '-100%', y: 0 };

	const transition = { type: 'keyframes', duration: 1 };
	return (
		<div>
			<div className="@container h-screen">
				<div className="relative grid grid-cols-2 h-full">
					<div>
						<div className=" h-full w-screen">
							<motion.div
								className="absolute z-30 top-0"
								initial={{ opacity: 0, x: '-100%', y: '-10%' }}
								animate={{ opacity: 1, x: '50%', y: '-10%' }}
								transition={transition}
							>
								<Elem4 className="@[300px]:h-[105px] @[500px]:h-[130px] @[700px]:h-[150px] @[900px]:h-[265px] @[1100px]:h-[265px] h-[100px]" />
							</motion.div>
							<motion.div
								className="absolute z-20"
								initial={{ opacity: 0, x: '-100%', y: 20 }}
								animate={{ opacity: 1, x: -50, y: 20 }}
								transition={transition}
							>
								<Elem1 className="@[300px]:h-[40px] @[500px]:h-[50px] @[700px]:h-[60px] @[900px]:h-[70px] @[1100px]:h-[94px] h-[30px]" />
							</motion.div>

							<motion.div
								className="absolute  z-20"
								initial={{ opacity: 0, x: '-100%', y: 100 }}
								animate={{ opacity: 1, x: -50, y: 100 }}
								transition={transition}
							>
								<Elem13 className="@[300px]:h-[40px] @[500px]:h-[50px] @[700px]:h-[60px] @[900px]:h-[70px] @[1100px]:h-[94px] h-[50px]" />
							</motion.div>
						</div>
						<div>
							<motion.div
								className="absolute z-20 left-0 bottom-0"
								initial={initial}
								animate={{ opacity: 1, x: -50, y: 20 }}
								transition={transition}
							>
								<Elem2 className="@[300px]:h-[300px] @[500px]:h-[400px] @[700px]:h-[470px] @[900px]:h-[500px] @[1100px]:h-[550px] h-[50px]" />
							</motion.div>
							<motion.div
								className="absolute z-30 left-0 bottom-0"
								initial={initial}
								animate={{ opacity: 1, x: '85%', y: '-40%' }}
								transition={transition}
							>
								<Elem3 className="@[300px]:h-[150px] @[500px]:h-[220px] @[700px]:h-[270px] @[900px]:h-[300px] @[1100px]:h-[320px] h-[50px]" />
							</motion.div>
							<motion.div
								className="absolute z-50 left-0 bottom-0"
								initial={initial}
								animate={{ opacity: 1, x: '-15%', y: '-40%' }}
								transition={transition}
							>
								<Elem5 className="@[300px]:h-[130px] @[500px]:h-[160px] @[700px]:h-[200px] @[900px]:h-[230px] @[1100px]:h-[250px] h-[50px]" />
							</motion.div>
							<motion.div
								className="absolute z-0 left-0 bottom-0"
								initial={initial}
								animate={{ opacity: 1, x: '55%', y: '-25%' }}
								transition={transition}
							>
								<Elem12 className="@[300px]:h-[100px] @[500px]:h-[150px] @[700px]:h-[190px] @[900px]:h-[220px] @[1100px]:h-[230px] h-[50px]" />
							</motion.div>
							<motion.div
								className="absolute z-20 left-0 bottom-0"
								initial={initial}
								animate={{ opacity: 1, x: '30%', y: '15%' }}
								transition={transition}
							>
								<Elem6 className="@[300px]:h-[110px] @[500px]:h-[140px] @[700px]:h-[180px] @[900px]:h-[210px] @[1100px]:h-[240px] h-[50px]" />
							</motion.div>
						</div>
					</div>
					<div className="flex justify-end">
						<div className=" ">
							<motion.div
								className="absolute z-20 "
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: '-90%', y: -10 }}
								transition={transition}
							>
								<Elem14 className="@[300px]:h-[90px] @[500px]:h-[100px] @[700px]:h-[130px] @[900px]:h-[170px] @[1100px]:h-[200px] h-[50px]" />
							</motion.div>
							<motion.div
								className="absolute z-20  "
								initial={{ opacity: 0, x: '100%', y: '100%' }}
								animate={{ opacity: 1, x: '-90%', y: '120%' }}
								transition={transition}
							>
								<Elem15 className="@[300px]:h-[40px] @[500px]:h-[45px] @[700px]:h-[65px] @[900px]:h-[90px] @[1100px]:h-[100px] h-[50px]" />
							</motion.div>
							<motion.div
								className="absolute z-30  "
								initial={{ opacity: 0, x: '100%', y: '-20%' }}
								animate={{ opacity: 1, x: '-80%', y: '-10%' }}
								transition={transition}
							>
								<Elem10 className="@[300px]:h-[80px] @[500px]:h-[100px] @[700px]:h-[130px] @[900px]:h-[170px] @[1100px]:h-[200px] h-[50px]" />
							</motion.div>
							<motion.div
								className="absolute z-10  "
								initial={{ opacity: 0, x: '100%', y: '30%' }}
								animate={{ opacity: 1, x: '-50%', y: '30%' }}
								transition={transition}
							>
								<Elem11 className="@[300px]:h-[90px] @[500px]:h-[100px] @[700px]:h-[160px] @[900px]:h-[200px] @[1100px]:h-[250px] h-[50px]" />
							</motion.div>
							<motion.div
								className="absolute z-10  "
								initial={{ opacity: 0, x: '100%', y: '40%' }}
								animate={{ opacity: 1, x: '-80%', y: '40%' }}
								transition={transition}
							>
								<Elem9 className="@[300px]:h-[100px] @[500px]:h-[180px] @[700px]:h-[300px] @[900px]:h-[360px] @[1100px]:h-[400px] h-[50px]" />
							</motion.div>
						</div>
						<div className="absolute bottom-0">
							<motion.div
								className="absolute z-20  "
								initial={{ opacity: 0, x: '100%', y: '-100%' }}
								animate={{ opacity: 1, x: '-90%', y: '-100%' }}
								transition={transition}
							>
								<Elem7 className="@[300px]:h-[250px] @[500px]:h-[310px] @[700px]:h-[390px] @[900px]:h-[410px] @[1100px]:h-[500px] h-[50px]" />
							</motion.div>
							<motion.div
								className="absolute z-10  "
								initial={{ opacity: 0, x: '100%', y: '-100%' }}
								animate={{ opacity: 1, x: '-80%', y: '-100%' }}
								transition={transition}
							>
								<Elem8 className="@[300px]:h-[50px] @[500px]:h-[100px] @[700px]:h-[130px] @[900px]:h-[170px] @[1100px]:h-[200px] h-[50px]" />
							</motion.div>
						</div>
					</div>
					<div className="absolute z-50 h-full w-screen flex items-center justify-center">
						<div className="">
							<div className=" flex items-center justify-center ">
								<div className="flex items-center justify-center">
									<Fraza className="@[300px]:h-[90px] @[500px]:h-[80px] @[700px]:h-[100px] @[900px]:h-[120px] @[1100px]:h-[170px] h-[50px]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen">1</div>
			<div className="h-screen">2</div>
			<div className="h-screen">3</div>
			<div className="h-screen">4</div>
			<div className="h-screen">5</div>
			<div className="h-screen">6</div>
		</div>
	);
}
