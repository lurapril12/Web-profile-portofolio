import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFigma, FaJira, FaPython, FaWordpress } from 'react-icons/fa';

const SkillsIcons = [
    { icon: <FaHtml5 size={140} />, name: 'HTML5' },
    { icon: <FaCss3Alt size={140} />, name: 'CSS3' },
    { icon: <FaReact size={110} />, name: 'React' },
    { icon: <FaJsSquare size={110} />, name: 'JavaScript' },
    { icon: <FaFigma size={140} />, name: 'Figma' },
    { icon: <FaPython size={110} />, name: 'Python' },
    { icon: <FaWordpress size={110} />, name: 'Wordpress' },
    { icon: <FaJira size={110} />, name: 'Jira' },
];

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
      <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
        <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {SkillsIcons.map((skill, index) => (
                <div
                    key={index}
                    className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                    {skill.icon}
                    <p className='mt-2'>{skill.name}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
