'use client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Game_development_info_info from './components/Game_development_info';
import Game_development_service from './components/Game_development_service';
import Game_development_process from './components/Game_development_process';
import Booking from '@/components/Booking';

export default function SoftwareSupportAndServices() {
  
  return (
    <>
    <Breadcrumbs
  pageTitle="Game Development"
  sectionTitle="From Dream to Joystick – Your Game, Our Creation"
  sectionDescription="Whether you’re a startup, brand, or enterprise, we design and build games that capture imaginations, delight audiences, and create lasting impact."/>

    <Game_development_info_info/>
    <Game_development_service/>
    <Game_development_process/>
    <Booking/>
         
         
         
    </>
  );
}
