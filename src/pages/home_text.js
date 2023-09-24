import React from 'react';
import Link from 'next/link'

function showAlert() {
    alert("We will notify you when Spark! Bytes is up and running!")
}

export default function home_text() {
    return (
        <>
            <nav>
                <h4> Spark! Bytes</h4>
                <img class ="spark_logo" src="./images/spark_logo.png" alt="Spark logo" />
                <ul>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/">Home</Link></li>
                </ul>
            </nav>
            <h1 class = "header">Spark! Bytes - Leftover Food Notifications for BU's Campus</h1>
            <p>
                Spark! Bytes is a revolutionary platform for Boston University's community.
                After events, any leftover food can be posted here, and those interested can
                sign up to grab some delicious free food. <br />
                <br />
                Our unique feature allows users to filter out food based on allergens, types
                and more. Stay up-to-date through SMS and text notifications whenever free
                food is available nearby!
            </p>
            <h2 class = "header"><span class="borderexample">Sign Up</span></h2>
            <p>Signup for Notifications</p>
            <div>
                <form>
                    <input type="text" placeholder="Enter your email" id="email" />
                    <button onClick = {showAlert}>Sign Up</button>
                </form>
            </div>
            <div>
                <h2 class = "header">Want to try it out?</h2>
                <div>
                    <button class = 'popup' onClick = {showAlert}>
                        <img className="btn-logo" src="./images/apple.svg" alt="apple logo" />
                        Join for iOS
                    </button>
                    <button class = 'popup' onClick = {showAlert}>
                        <img className="btn-logo" src="./images/android.svg" alt="android logo" />
                        Join for Android
                    </button>
                </div>
            </div>
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