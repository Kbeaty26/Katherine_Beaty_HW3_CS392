import React from 'react';
import Link from 'next/link';

export default function about_text() {
    return (
        <>
            <nav>
                <h2> Spark! Bytes</h2>
                <img class ="spark_logo" src="./images/spark_logo.png" alt="Spark logo" />
                <ul>
                    <li><Link href="/">About Us</Link></li>
                    <li><Link href="/home_text">Home</Link></li>
                </ul>
            </nav>
            <h1 class = "header">About Spark! Bytes</h1>
            <p>
                Spark! Bytes was conceived with a simple idea in mind - to minimize food waste and maximize food sharing within the Boston University community. 
                We recognized the potential of connecting those who have excess food with those who could benefit from it.
            </p>
            <h2 class = "header">About the Author</h2>
            <p class = "author-info">
                <img class = "author-img" src = "./images/Bagel.jpg" alt = "Dog laying on beack with sunglasses on" />
                Katherine Beaty is a Data Science student at Boston University. 
                She founded Spark! Bytes for a class project that was fueled by finding a way to decrease food waste after events on campus. 
                In her free time she enjoys hiking with her dog, Bagel, and playing video games.
            </p>
            <footer>
                <p>
                    <img class ="paws" src = "./images/pawprints.png" />
                    © 2023 Spark! Bytes. All Rights Reserved.
                    <img class ="paws" src = "./images/pawprints.png" />
                </p>
            </footer>
        </>
    );
}