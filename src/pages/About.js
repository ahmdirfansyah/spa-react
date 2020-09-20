import React from 'react';

import { Layout } from '../layout';
import img from '../assets/profile.jpg';

const About = () => 
<Layout>
<img class="object-none object-center bg-gray-400 w-30 h-30 rounded-full mx-auto animate-pulse" src={img} alt="profile"></img>
<div class="px-5 py-5">
    <h1 className="text-2xl font-bold text-blue-800">Ahmad Irfansyah</h1>
    <div class="text-black-500">System Administrator</div>
    <div class="text-black-500">irfansyah.ahmad@inalum.id</div>
</div>
</Layout>;


export default About;

