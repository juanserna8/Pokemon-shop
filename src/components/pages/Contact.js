import axios from 'axios';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
        })
        return () => cancel()
    }, [currentPageUrl]);

    if (loading) return 'Loading...'

    return (
        <div className="mt-4 grid grid-cols-1 justify-items-center">
            <h1 className="text-4xl">Let's keep in touch</h1>
            <p>Need help with your business or project website? ... Let's talk!</p>
            <ul>{pokemon.map((p) => {
                return <li key={p}>{p}</li>
            })}
            </ul>
        </div>
    );
}
 
export default Contact;