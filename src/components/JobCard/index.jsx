/* eslint-disable react/prop-types */
import dayjs from 'dayjs'

function JobCard(props) {
    // const skills = ["Javascript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
  return (
    <div className='md:mx-40 mx-8 mb-4'>
        <div className='flex flex-col items-start md:flex-row justify-between md:items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103 gap-4'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                <div className='flex items-center flex-wrap gap-2'>
                    {props.skills.map((skill,i) => (
                        <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-black text-sm md:text-normal'>{skill}</p>
                    ))}
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                <p className='text-gray-500 w-full text-start'>Posted {diffInDays > 1? `${diffInDays} days`: `${diffInDays} day`} ago</p>
                <a href={props.job_link} target="_blank" rel="noopener noreferrer">
                    <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Apply</button>
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default JobCard