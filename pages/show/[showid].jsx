import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import Image from 'next/image'

const Show = ({ show }) => {
  return (
    <div>
      <Head>
        <title>{(show && show.name) || 'missing name'} - Movie Guide</title>
        <link rel="icon" href="/static/favicon.ico" importance="low" />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">{(show && show.name) || 'missing name'}</h1>
        <div className="genre">
          {(show && show.genres && show.genres.join(', ')) || 'missing genres'}
        </div>
      </div>

      <div className="row gap">
        <div className="card">
          <h3>Summary</h3>
          <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
        <div className="card">
          <div className="card">
            {!show ? (
              <div>loading...</div>
            ) : (
              <Image
                src={show.image && show.image.medium}
                alt={show.name}
                width={210}
                height={295}
              />
            )}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .gap {
          gap: 1rem;
        }
        .genre {
          text-align: center;
          margin: 20px 0;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { showid } = context.query
  const response = await fetch(`https://api.tvmaze.com/shows/${showid}`)
  const show = await response.json()

  console.log({ show })

  return {
    props: {
      show,
    },
  }
}

export default Show
