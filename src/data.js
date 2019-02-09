const missions = [
    {
        agent: '007', country: 'Brazil',
        address: 'Avenida Vieira Souto 168 Ipanema, Rio de Janeiro',
        date: 'Dec 17, 1995, 9:45:17 PM'
    },
    {
        agent: '005', country: 'Poland',
        address: 'Rynek Glowny 12, Krakow',
        date: 'Apr 5, 2011, 5:05:12 PM'
    },
    {
        agent: '007', country: 'Morocco',
        address: '27 Derb Lferrane, Marrakech',
        date: 'Jan 1, 2001, 12:00:00 AM'
    },
    {
        agent: '005', country: 'Brazil',
        address: 'Rua Roberto Simonsen 122, Sao Paulo',
        date: 'May 5, 1986, 8:40:23 AM'
    },
    {
        agent: '011', country: 'Poland',
        address: 'swietego Tomasza 35, Krakow',
        date: 'Sep 7, 1997, 7:12:53 PM'
    },
    {
        agent: '003', country: 'Morocco',
        address: 'Rue Al-Aidi Ali Al-Maaroufi, Casablanca',
        date: 'Aug 29, 2012, 10:17:05 AM'
    },
    {
        agent: '008', country: 'Brazil',
        address: 'Rua tamoana 418, tefe',
        date: 'Nov 10, 2005, 1:25:13 PM'
    },
    {
        agent: '013', country: 'Poland',
        address: 'Zlota 9, Lublin',
        date: 'Oct 17, 2002, 10:52:19 AM'
    },
    {
        agent: '002', country: 'Morocco',
        address: 'Riad Sultan 19, Tangier',
        date: 'Jan 1, 2017, 5:00:00 PM'
    },
    {
        agent: '009', country: 'Morocco',
        address: 'atlas marina beach, agadir',
        date: 'Dec 1, 2016, 9:21:21 PM'
    },
    {
        agent: '010', country: 'Brazil',
        address: 'Avenida Vieira Souto 168 Ipanema, Rio de Janeiro',
        date: 'Nov 21, 2005, 4:56:10 PM'
    },
    {
        agent: '101', country: 'Poland',
        address: 'Rynek Glowny 12, Krakow',
        date: 'Jan 15, 2001, 7:32:03 PM'
    },
    {
        agent: '011', country: 'Brazil',
        address: 'Rua Roberto Simonsen 122, Sao Paulo',
        date: 'Feb 25, 1996, 11:12:47 AM'
    },
    {
        agent: '011', country: 'Poland',
        address: 'swietego Tomasza 35, Krakow',
        date: 'Jun 17, 1987, 5:45:13 PM'
    },
    {
        agent: '070', country: 'Morocco',
        address: 'Rue Al-Aidi Ali Al-Maaroufi, Casablanca',
        date: 'Oct 23, 2018, 7:53:26 AM'
    },
    {
        agent: '071', country: 'Brazil',
        address: 'Rua tamoana 418, tefe',
        date: 'Mar 15, 2005, 11:20:13 PM'
    },
    {
        agent: '070', country: 'Poland',
        address: 'Zlota 9, Lublin',
        date: 'May 24, 2012, 2:36:48 AM'
    },
    {
        agent: '017', country: 'Morocco',
        address: 'atlas marina beach, agadir',
        date: 'Jul 1, 2016, 9:21:21 PM'
    }
];

export const sortedData = () => missions.sort((missionA, missionB) => new Date(missionA.date) > new Date(missionB.date));

const findIsolatedCountries = (agentMissions, isolatedAgents) => isolatedAgents.reduce((isolationMap, agent) => {
    const isolatedCountry = agentMissions[agent];
    if(isolationMap[isolatedCountry]) {
        isolationMap[isolatedCountry]++
    } else {
        isolationMap[isolatedCountry] = 1
    };
    return isolationMap
}, {});

const findMostIsolated = (isolatedCountries) => Object.keys(isolatedCountries).reduce((maxIsolated, country) => {
    if(isolatedCountries[country] > isolatedCountries[maxIsolated]) {
        maxIsolated = country;
    } else if (isolatedCountries[country] === isolatedCountries[maxIsolated]) {
        maxIsolated += `, ${country}`;
    }
    return maxIsolated
})

export const findIsolated = () => {
    let agentMissions = {};
    missions.forEach(mission =>
        agentMissions[mission.agent] ? agentMissions[mission.agent].push(mission) : agentMissions[mission.agent] = [mission.country]);

    const isolatedAgents = Object.keys(agentMissions).filter(key => agentMissions[key].length === 1);

    const isolatedCountries = findIsolatedCountries(agentMissions, isolatedAgents);

    const mostIsolated = findMostIsolated(isolatedCountries);
    
    return mostIsolated;
}
