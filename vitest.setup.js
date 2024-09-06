import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'

export const shows = [
  {
    score: 0.90642244,
    show: {
      id: 1382,
      url: 'https://www.tvmaze.com/shows/1382/dracula',
      name: 'Dracula',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Horror'],
      status: 'Ended',
      runtime: 60,
      averageRuntime: 60,
      premiered: '2013-10-25',
      ended: '2014-01-24',
      officialSite: null,
      schedule: {
        time: '22:00',
        days: [],
      },
      rating: {
        average: 6.9,
      },
      weight: 91,
      network: {
        id: 1,
        name: 'NBC',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
        officialSite: 'https://www.nbc.com/',
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 32370,
        thetvdb: 263724,
        imdb: 'tt2296682',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/7/19413.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/7/19413.jpg',
      },
      summary:
        "<p>Golden Globe winner Jonathan Rhys Meyers (\"The Tudors\") stars in this provocative new drama as one of the world's most iconic characters. It's the late 19th century and the mysterious Dracula (Rhys Meyers) has arrived in London, posing as an American entrepreneur who wants to bring modern science to Victorian society. He's especially interested in the new technology of electricity, which promises to brighten the night - useful for someone who avoids the sun. But he has another reason for his travels: He hopes to take revenge on those who cursed him with immortality centuries earlier. Everything seems to be going according to plan... until he becomes infatuated with a woman who appears to be a reincarnation of his dead wife.</p>",
      updated: 1721001568,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/1382',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/120562',
          name: 'Let There Be Light',
        },
      },
    },
  },
  {
    score: 0.90562975,
    show: {
      id: 37453,
      url: 'https://www.tvmaze.com/shows/37453/dracula',
      name: 'Dracula',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Horror'],
      status: 'Ended',
      runtime: 90,
      averageRuntime: 90,
      premiered: '2020-01-01',
      ended: '2020-01-03',
      officialSite: 'https://www.bbc.co.uk/programmes/p07rxf89',
      schedule: {
        time: '21:00',
        days: ['Wednesday', 'Thursday', 'Friday'],
      },
      rating: {
        average: 7.6,
      },
      weight: 89,
      network: {
        id: 12,
        name: 'BBC One',
        country: {
          name: 'United Kingdom',
          code: 'GB',
          timezone: 'Europe/London',
        },
        officialSite: 'https://www.bbc.co.uk/bbcone',
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 361160,
        imdb: 'tt9139220',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/234/587308.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/234/587308.jpg',
      },
      summary:
        '<p>In Transylvania in 1897, the blood drinking Count is drawing his plans against Victorian London. And be warned: the dead travel fast.</p>',
      updated: 1661601994,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/37453',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/1767818',
          name: 'The Dark Compass',
        },
      },
    },
  },
  {
    score: 0.6649928,
    show: {
      id: 890,
      url: 'https://www.tvmaze.com/shows/890/young-dracula',
      name: 'Young Dracula',
      type: 'Scripted',
      language: 'English',
      genres: ['Comedy', 'Children', 'Horror'],
      status: 'Ended',
      runtime: 30,
      averageRuntime: 30,
      premiered: '2006-09-21',
      ended: '2014-03-31',
      officialSite: 'http://www.bbc.co.uk/cbbc/shows/young-dracula',
      schedule: {
        time: '18:00',
        days: ['Monday'],
      },
      rating: {
        average: 7.8,
      },
      weight: 45,
      network: {
        id: 60,
        name: 'CBBC',
        country: {
          name: 'United Kingdom',
          code: 'GB',
          timezone: 'Europe/London',
        },
        officialSite: 'https://www.bbc.co.uk/tv/cbbc',
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 10807,
        thetvdb: 80248,
        imdb: 'tt0876219',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/99/249076.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/99/249076.jpg',
      },
      summary:
        '<p>Fitting in is hard enough, but when your dad is Count Dracula, things go from hard to worse! Follow the comic misadventures of Vlad and Ingrid as they move from Transylvania to Britain with their narcissistic single dad, the Count.</p>',
      updated: 1704794771,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/890',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/82642',
          name: 'The Darkest Hour, Part 2',
        },
      },
    },
  },
  {
    score: 0.6500843,
    show: {
      id: 22960,
      url: 'https://www.tvmaze.com/shows/22960/count-dracula',
      name: 'Count Dracula',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Horror', 'Romance'],
      status: 'Ended',
      runtime: 70,
      averageRuntime: 75,
      premiered: '1977-12-22',
      ended: '1977-12-22',
      officialSite: 'http://www.bbc.co.uk/programmes/p00tjfhs',
      schedule: {
        time: '21:35',
        days: ['Thursday'],
      },
      rating: {
        average: null,
      },
      weight: 35,
      network: {
        id: 37,
        name: 'BBC Two',
        country: {
          name: 'United Kingdom',
          code: 'GB',
          timezone: 'Europe/London',
        },
        officialSite: 'https://www.bbc.co.uk/bbctwo',
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 128761,
        imdb: null,
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/85/212769.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/85/212769.jpg',
      },
      summary:
        "<p>Gothic romance based on Bram Stoker's classic horror story. This is the story of the bloodsucking vampire and his nemesis Professor Van Helsing.</p>",
      updated: 1609099554,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/22960',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/992250',
          name: 'Part Two',
        },
      },
    },
  },
  {
    score: 0.6377841,
    show: {
      id: 46242,
      url: 'https://www.tvmaze.com/shows/46242/hi-dracula',
      name: 'Hi Dracula',
      type: 'Scripted',
      language: 'Korean',
      genres: ['Drama', 'Music'],
      status: 'Ended',
      runtime: 90,
      averageRuntime: 90,
      premiered: '2020-02-17',
      ended: '2020-02-18',
      officialSite: 'http://tv.jtbc.joins.com/hellodracula',
      schedule: {
        time: '21:30',
        days: ['Monday', 'Tuesday'],
      },
      rating: {
        average: null,
      },
      weight: 28,
      network: {
        id: 268,
        name: 'jTBC',
        country: {
          name: 'Korea, Republic of',
          code: 'KR',
          timezone: 'Asia/Seoul',
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: null,
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/241/602851.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/241/602851.jpg',
      },
      summary:
        "<p><b>Hi Dracula</b> is the growth story of people who live in Block Z who have to face the matters in life that they just want to avoid. It's an omnibus drama about a daughter named Anna who gives in to her mother, a mother named Ji Young who overpowers her daughter, an indie band vocalist named Seo Yun, born rich Ji Hyung and Yoo Ra, who wasn't brought up in the best of conditions.</p>",
      updated: 1654689688,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/46242',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/1801191',
          name: 'Episode 2',
        },
      },
    },
  },
  {
    score: 0.6077431,
    show: {
      id: 65307,
      url: 'https://www.tvmaze.com/shows/65307/little-dracula',
      name: 'Little Dracula',
      type: 'Animation',
      language: 'English',
      genres: [],
      status: 'Ended',
      runtime: 30,
      averageRuntime: 30,
      premiered: '1991-09-03',
      ended: '1999-10-02',
      officialSite: null,
      schedule: {
        time: '',
        days: ['Tuesday'],
      },
      rating: {
        average: null,
      },
      weight: 18,
      network: {
        id: 4,
        name: 'FOX',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
        officialSite: 'https://www.fox.com/',
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 76952,
        imdb: 'tt0101135',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/431/1078621.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/431/1078621.jpg',
      },
      summary:
        '<p>This show is about a little Dracula whose quest is to become a great vampire just like his father Big Dracula.</p>',
      updated: 1669315780,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/65307',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/2435065',
          name: 'The Chamber of Unspeakable Terror',
        },
      },
    },
  },
  {
    score: 0.56479406,
    show: {
      id: 14103,
      url: 'https://www.tvmaze.com/shows/14103/dracula-the-series',
      name: 'Dracula: The Series',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Family', 'Supernatural'],
      status: 'Ended',
      runtime: 22,
      averageRuntime: 22,
      premiered: '1990-09-29',
      ended: '1991-05-11',
      officialSite: null,
      schedule: {
        time: '',
        days: ['Saturday'],
      },
      rating: {
        average: null,
      },
      weight: 39,
      network: {
        id: 72,
        name: 'Syndication',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 3366,
        thetvdb: 75410,
        imdb: 'tt0098779',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/48/120555.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/48/120555.jpg',
      },
      summary:
        '<p><b>Dracula: The Series</b> is based on two teenage brothers who visit their uncle Gustav in Europe. There they find that they find out that vampires exist. The brothers soon meet the rich businessman Alexander Lucard who is who is none other than Count Dracula.</p>',
      updated: 1680673844,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/14103',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/648278',
          name: 'Klaus Encounters of the Interred Kind',
        },
      },
    },
  },
  {
    score: 0.4817365,
    show: {
      id: 54859,
      url: 'https://www.tvmaze.com/shows/54859/don-dorakyura',
      name: 'Don Dorakyura',
      type: 'Animation',
      language: 'Japanese',
      genres: ['Anime'],
      status: 'Ended',
      runtime: 30,
      averageRuntime: 30,
      premiered: '1982-04-05',
      ended: '1982-05-24',
      officialSite: 'https://tezukaosamu.net/jp/anime/45.html',
      schedule: {
        time: '',
        days: ['Monday'],
      },
      rating: {
        average: null,
      },
      weight: 26,
      network: {
        id: 76,
        name: 'TV Tokyo',
        country: {
          name: 'Japan',
          code: 'JP',
          timezone: 'Asia/Tokyo',
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: 'tt1196478',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/309/774612.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/309/774612.jpg',
      },
      summary:
        '<p>After living in Transylvania for several years, "Earl Dracula" has moved to Japan. In the Nerima Ward of Tokyo, he and his daughter, Chocola, and faithful servant Igor. While Chocola attends night classes at Matsutani Junior High School, Earl Dracula is desperate to drink the blood of beautiful virgin women; an appropriate meal for a vampire of his stature. However, each night that Earl Dracula goes out on the prowl he finds himself getting involved in some kind of disturbance which leads to him causing various trouble for the local residents. With nobody in Japan believing in vampires, his very presence causes trouble amongst the people in town.</p><p><br /> </p>',
      updated: 1704793383,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/54859',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/2075083',
          name: 'Scared of garlic, the cross, and the dentist',
        },
      },
    },
  },
  {
    score: 0.4151591,
    show: {
      id: 78155,
      url: 'https://www.tvmaze.com/shows/78155/dracula-escape-the-castle',
      name: 'Dracula: Escape the Castle',
      type: 'Game Show',
      language: 'English',
      genres: [],
      status: 'Ended',
      runtime: 48,
      averageRuntime: 48,
      premiered: '2016-04-17',
      ended: '2016-06-19',
      officialSite: 'https://watch.insight.tv/dracula',
      schedule: {
        time: '',
        days: [],
      },
      rating: {
        average: null,
      },
      weight: 8,
      network: null,
      webChannel: {
        id: 298,
        name: 'Insight TV',
        country: null,
        officialSite: null,
      },
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 402796,
        imdb: null,
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/525/1314101.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/525/1314101.jpg',
      },
      summary:
        "<p>Welcome to Dracula's castle. Two teams are trapped overnight and must find their way out by locating the key through mental and physical challenges.</p>",
      updated: 1719755431,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/78155',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/2932484',
          name: 'Episode 10',
        },
      },
    },
  },
  {
    score: 0.35927024,
    show: {
      id: 64170,
      url: 'https://www.tvmaze.com/shows/64170/the-boulet-brothers-dragula-titans',
      name: "The Boulet Brothers' Dragula: Titans",
      type: 'Reality',
      language: 'English',
      genres: [],
      status: 'Running',
      runtime: null,
      averageRuntime: 68,
      premiered: '2022-10-25',
      ended: null,
      officialSite:
        'https://www.shudder.com/series/watch/the-boulet-brothers-dragula-titans/ddd58afd33c860df?season=1',
      schedule: {
        time: '',
        days: ['Tuesday'],
      },
      rating: {
        average: null,
      },
      weight: 42,
      network: null,
      webChannel: {
        id: 213,
        name: 'Shudder',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
        officialSite: 'https://www.shudder.com/',
      },
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 424698,
        imdb: 'tt22084446',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/461/1153684.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/461/1153684.jpg',
      },
      summary:
        "<p>Hosted by The Boulet Brothers, this spin-off series of The Boulet Brothers' Dragula stars monster drag artists from the show's previous seasons returning to the competition for a chance to win a $100,000 grand prize and the title of Dragula's first Titan. Each week the returning drag monsters must compete in makeup, costume creation, and performance based challenges to prove that they are the best of the best, while the weakest among them must face terrifying physical feats or risk elimination until only the true Titan of Dragula remains. </p>",
      updated: 1698178339,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/64170',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/2419048',
          name: 'Grand Finale',
        },
      },
    },
  },
]

export const restHandlers = [
  http.get('https://api.tvmaze.com/search/shows', ({ request }) => {
    // Construct a URL instance out of the intercepted request.
    const url = new URL(request.url)

    // Read the "id" URL query parameter using the "URLSearchParams" API.
    // Given "/product?id=1", "productId" will equal "1".
    const q = url.searchParams.get('q')

    // if query params is "no results", return no results
    if (q === 'no results') {
      return HttpResponse.json([])
    }

    return HttpResponse.json(shows)
  }),
  http.get('https://api.tvmaze.com/shows/:showid', ({ params }) => {
    const showid = Number(params.showid)
    const show = shows.find((show) => show.show.id === showid)

    if (!show) {
      return HttpResponse.status(404)
    }

    return HttpResponse.json(show)
  }),
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url)
})
