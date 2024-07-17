import React from 'react';
import nvidiaLogo from '../assets/nvidia.png'; 
import fb from '../assets/facebook.png';
import chatgpt from '../assets/chatgpt.png';
import whatsapp from '../assets/whatsapp.png';
import gorgeo from '../assets/gorjeo.png';
import wifi from '../assets/logotipo-de-wifi.png';
import cromo from '../assets/cromo.png';
import apple from '../assets/logotipo-de-apple (1).png';
import bluetooth from '../assets/bluetooth (1).png';
import discord from '../assets/discordia (1).png';
import correo from '../assets/correo (1).png';
import linkedin from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';
import telegram from '../assets/telegrama.png';
import twitch from '../assets/contraccion-nerviosa.png';
import spotify from '../assets/spotify.png';
import reddit from '../assets/reddit.png';
import windows from '../assets/silueta-del-logotipo-de-windows.png';
import idm from '../assets/ibm.png';
import huawei from '../assets/huawei.png';
import android from '../assets/simbolo-de-caracter-de-android.png';
import tesla from '../assets/tesla.png';
import intel from '../assets/intel.png';

const logos = [
  { src: intel, name: 'INTEL', year: 1968 },
  { src: correo, name: 'CORREO', year: 1971 },
  { src: apple, name: 'APPLE', year: 1976 },
  { src: windows, name: 'WINDOWS', year: 1985 },
  { src: huawei, name: 'HUAWEI', year: 1987 },
  { src: nvidiaLogo, name: 'NVIDIA', year: 1993 },
  { src: bluetooth, name: 'BLUETOOTH', year: 1994 },
  { src: wifi, name: 'WIFI', year: 1997 },
  { src: idm, name: 'IDM', year: 1999 },
  { src: linkedin, name: 'LINKEDIN', year: 2002 },
  { src: android, name: 'ANDROID', year: 2003 },
  { src: tesla, name: 'TESLA', year: 2003 },
  { src: youtube, name: 'YOUTUBE', year: 2005 },
  { src: reddit, name: 'REDDIT', year: 2005 },
  { src: spotify, name: 'SPOTIFY', year: 2006 },
  { src: gorgeo, name: 'GORGEO', year: 2006 },
  { src: cromo, name: 'CROMO', year: 2008 },
  { src: whatsapp, name: 'WHATSAPP', year: 2009 },
  { src: twitch, name: 'TWITCH', year: 2011 },
  { src: telegram, name: 'TELEGRAM', year: 2013 },
  { src: discord, name: 'DISCORD', year: 2015 },
  { src: chatgpt, name: 'CHATGPT', year: 2022 }, // Actualización de la fecha de ChatGPT
];

function TechLogos() {
  return (
    <div className="overflow-hidden mt-5">
      <div className="flex animate-scroll space-x-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={logo.src} alt={logo.name} className="w-24 h-auto mb-2" />
            <p>{logo.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechLogos;
