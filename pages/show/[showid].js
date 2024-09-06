import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'

const Show = ({ show }) => {
    return (
        <div>
            <Head>
                <title>Show</title>
                <link rel='icon' href='/static/favicon.ico' importance='low' />
            </Head>

            <Nav />

            <div className='hero'>
                <h1 className='title'>Show "{show && show.name || 'missing name'}"</h1>
                <p className='description'>
                    To get started, edit <code>pages/show/[showid].js</code> and save to reload.
                </p>

            </div>

            <style jsx>{`
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
      `}</style>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { showid } = context.query;
    const response = await fetch(`https://api.tvmaze.com/shows/${showid}`);
    const show = await response.json();

    return {
        props: {
            show: null
        }
    };
}

export default Show