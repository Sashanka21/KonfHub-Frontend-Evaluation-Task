import List from '../CustomComponent/List';
import React from 'react'
import Speckers from '../CustomComponent/Speckers'
import WorkShop from '../CustomComponent/WorkShop'
import EventDescription from '../CustomComponent/EventDescription'

const Main = ({data}) => {
  return (
    
    <div className='flex mx-16 gap-10 overflow-y-auto'>
    <div className='flex-[7] '>
      <img src={data.event_poster_url} alt='event_poster_url' />
      <div>
        <h1 className='text-lg font-medium mt-6'>About Events</h1>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
        <style jsx>{`
          .custom-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 1em;
            font-family: Arial, sans-serif;
            border-radius: 5px 5px 0 0;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
          }
          .custom-table thead tr {
            background-color: #009879;
            color: #ffffff;
            text-align: left;
            font-weight: bold;
          }
          .custom-table th,
          .custom-table td {
            padding: 12px 15px;
            border: 1px solid #dddddd;
          }
          .custom-table tbody tr {
            border-bottom: 1px solid #dddddd;
          }
          .custom-table tbody tr:nth-of-type(even) {
            background-color: #f3f3f3;
          }
        `}</style>
      </div>

      <div>
        <h1 className='text-2xl font-semibold'>Tickets</h1>
        <List />
      </div>
      <Speckers data={data} />
      <WorkShop data={data} />
      <div className='uppercase text-2xl font-bold'>
        {data.sponsor_section_title}
      </div>
      <div
        className='my-5 text-lg'
        dangerouslySetInnerHTML={{
          __html: data.sponsor_section_description,
        }}
      />
      <a href='https://konfhub.com/' target='blank'>
        <img
          src='https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75'
          alt='...'
          className='w-60 h-24 border-2 rounded-xl'
        />
      </a>

      <div>
        <h2 className='text-2xl font-bold mt-2.5 mb-4'>
          SPONSOR <br></br> CATEGORY
        </h2>
        <a
          href='https://darkknight.in/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <hr className='w-1/2 ml-[150px] border border-[#efeaea] bg-[#306855] -mt-[53px] mb-[38px]' />

          <img
            src='https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg'
            alt='Sponsor Category'
            className='w-full max-w-xs h-auto rounded-xl'
          />
        </a>
      </div>
    </div>
    <EventDescription data={data}/>       
  </div>
  )
}

export default Main
