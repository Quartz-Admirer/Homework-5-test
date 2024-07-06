"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComicPage: React.FC = () => {
    const [comic, setComic] = useState<any>(null);

    useEffect(() => {
        const fetchComic = async () => {
            const email = 'o.shchendrigin@innopolis.university';
            const emailParam = new URLSearchParams({ email });
            const comicIdResponse = await axios.get(`https://fwd.innopolis.university/api/hw2?email=${emailParam}`);
            const comicId = comicIdResponse.data;

            const comicResponse = await axios.get(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
            const comicData = comicResponse.data;

            setComic(comicData);
        };

        fetchComic();
    }, []);

    if (!comic) return <div>Loading...</div>;

    return (
        <div className="comic-container">
            <div className="comic-details">
                <h2 id="comic-title">{comic.safe_title}</h2>
                <p id="comic-date">{new Date(
                    Date.UTC(
                        Number.parseInt(comic.year),
                        Number.parseInt(comic.month) - 1
                    )
                ).toLocaleDateString(undefined, { month: "numeric", year: "numeric" })}</p>
                <img id="comic-image" src={comic.img} alt={comic.alt} />
                <p id="comic-alt">{comic.alt}</p>
            </div>
        </div>
    );
};

export default ComicPage;
