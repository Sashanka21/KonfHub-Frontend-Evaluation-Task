import React from 'react'
import EventTimer from '../CustomComponent/EventTimer';
const EventDescription = ({data}) => {
  return (
    <div className='block flex-[2.5] min-h-[100vh] !h-auto'>
          <div className='sticky'>
            <div className=' border-2 border-gray-300 rounded-xl p-4 space-y-4'>
              <div className='text-center'>
                <h1 className='text-2xl font-bold break-words max-w-xs mx-auto'>{data.name}</h1>
              </div>
              <div className='flex  justify-between text-sm text-gray-700 '>
                <p className='flex items-center'>
                  <i aria-hidden='true' className='fa-solid fa-video mr-1'></i>
                  Online
                </p>
                <p className='flex items-center ml-5'>
                  <i className='fa-solid fa-ticket ml-1'></i> Paid
                </p>
              </div>
              <div className='text-1xl flex items-center justify-center'>
                <h1 className='text-1xl font-semibold mr-2'>
                  Event Live Link:
                  <a
                  href={data.event_live_link}
                  className='text-lg font-small text-blue-500 underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Open Streaming Website
                </a>
                </h1>
                
              </div>
              <div className='space-y-1'>
                <h3 className='font-semibold'>Date:</h3>
                <p className='text-sm'>
                  Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST
                </p>
              </div>
              <div>
                <EventTimer data={data} />
              </div>
            </div>

            <button className='w-full py-2 mt-6 text-xl font-semibold bg-purple-900 text-white rounded-md'>
              Buy Now
            </button>
            <div className='mt-4 border-2 shadow-xl rounded-md border-grey text-center'>
              <a
                href={data.event_website}
                className='block py-2 text-xl font-medium'
                target='_blank'
                rel='noopener noreferrer'
              >
                Official Website
              </a>
            </div>

            <h3 className='text-xl font-semibold my-4'>HOSTED BY</h3>
            <div className='border-2 rounded-lg my-4'>
              <div className='flex gap-x-10 items-center mx-7 mt-5'>
                <a href={data.organiser_website} target='blank'>
                  <img
                    src={data?.organiser_image_url}
                    alt='organiser_image_url'
                    className='w-10 h-10 rounded-full'
                  />
                </a>
                <h4 className='text-xl font-medium'>{data.organiser_name}</h4>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: data.organiser_info }}
                className='mx-6 text-left mt-5'
              />

              <h3 className='text-lg mx-5 mt-3 font-semibold'>Contact Us On</h3>
              <div className='flex gap-x-2 mx-6 my-5'>
                <a href={data.organizer_facebook_url} target='blank'>
                  <img
                    src='https://dev.konfhub.com/img/facebook-share.svg'
                    alt='organizer_facebook_url'
                    className='w-8 h-8'
                  />
                </a>
                <a href='https://twitter.com/konfhub' target='blank'>
                  <img
                    src='https://dev.konfhub.com/img/twitter-pro-black.svg'
                    alt='twitter'
                    className='w-8 h-8'
                  />
                </a>
                <a href={data.organizer_linkedin_url} target='blank'>
                  <img
                    src='https://dev.konfhub.com/img/linkedin-share.svg'
                    alt='linkedin'
                    className='w-8 h-8'
                  />
                </a>
                <a href='https://darkknight.in' target='blank'>
                  <img
                    src='https://dev.konfhub.com/img/website-black.svg'
                    alt='website'
                    className='w-8 h-8'
                  />
                </a>

                <a href='mailto:manjunath@konfhub.com' target='blank'>
                  <img
                    src='https://dev.konfhub.com/img/mail-share.svg'
                    alt='mail'
                    className='w-8 h-8'
                  />
                </a>
                <a href='tel:+919988776655' target='blank'>
                  <img
                    src='https://dev.konfhub.com/img/call-share.svg'
                    alt='phone'
                    className='w-8 h-8'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default EventDescription
