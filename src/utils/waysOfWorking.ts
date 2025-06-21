import orderWhiteBg from '../assets/order-white-bg.png';
import pinWhiteBg from '../assets/pin-white-bg.png';
import time from '../assets/time-white-bg.png';
import tool from '../assets/tool-white-bg.png';

export type WaysOfWorking = {
  title: string;
  listOfWaysOfWorking: {
    id: number;
    title: string;
    icon: string;
    description: string;
  }[];
};

export const waysOfWorking: WaysOfWorking[] = [
  {
    title: 'Cara Kerja',
    listOfWaysOfWorking: [
      {
        id: 1,
        title: 'Buat Pesanan',
        icon: orderWhiteBg,
        description: 'Input keluhan AC Kamu',
      },
      {
        id: 2,
        title: 'Tandai Lokasi',
        icon: pinWhiteBg,
        description: 'Tentukan lokasi service AC Kamu',
      },
      {
        id: 3,
        title: 'Tentukan Jadwal',
        icon: time,
        description: 'Pilih waktu yang tepat untuk Kamu',
      },
      {
        id: 4,
        title: 'Teknisi Datang',
        icon: tool,
        description: 'Teknisi akan datang sesuai jadwal',
      },
    ],
  },
];
