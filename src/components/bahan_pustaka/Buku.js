import React from 'react';
import '../../App.css';
import { Box, extendTheme,Image, Text, Link, Center } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Button, ButtonGroup } from "@chakra-ui/react"
const Buku= () =>  {
  return(
    <Box p={4} display={{ md: "contents" }}>

    <Box flexShrink={0} display={{ md: "flex" }} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Image
          borderRadius="lg"
          width={{ md: 60 }}
          mt={8}
          src="images/Analisis dan Desain.jpg"
        />
        <Link
          mt={8}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
          md={6}
        >
        ANALISIS DAN DESAIN    
        </Link>
        <Text mt={2} color="gray.500" md={20}>
        Buku ini memberi pelajaran tentang konsep dan cara menganalisis serta mendesain sistem informasi beserta teknik dan alat-alat yang dapat digunakan. Metode untuk mengembangkan suatu sistem informasi berikut teknik dan alat-alatnya disebut metodologi. Metodologi yang digunakan di buku ini adalah metodologi pengembangan sistem terstruktur.
        Buku ini terdiri dari empat bagian utama: Bagian pertama, sebagai konsep dasar perlu dibaca terlebih dahulu bagi pembaca yang belum memahami tentang sistem, informasi, sistem informasi dan pengembangan sistem. Bagian ini terdiri dari dua bab, yaitu bab 1 dan bab 2.
        Bagian kedua, membahas tentang pengembangan sistem itu sendiri. Bagian ini terdiri dari 7 bab.
        Bagian ketiga, disajikan dalam bentuk 15 modul, membahas tentang teknik-teknik dan alat-alat yang dapat digunakan untuk mengembangkan sistem secara terstruktur. Dibuat dalam bentuk modul, karena tiap-tiap modul sering digunakan oleh bab-bab di bagian kedua, sehingga tidak harus selalu dibahas di bab 2. Bagian keempat terdiri dari empat buah lampiran mengenai pengembangan sistem SADT, Warnier/Orr dan JSD.

        </Text>
      </Box>
    <Center><Button colorScheme="blue">Pinjam</Button> </Center>

    <Box flexShrink={0} display={{ md: "flex" }} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Image
          borderRadius="lg"
          width={{ md: 60 }}
          mt={8}
          src="images/Dasar Logika Informatikal.jpg"
          width="200px"
        />
        <Link
          mt={8}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
          md={6}
        >
        ANALISIS DAN DESAIN    
        </Link>
        <Text mt={2} color="gray.500" md={20}>
        Buku ini memberi pelajaran tentang konsep dan cara menganalisis serta mendesain sistem informasi beserta teknik dan alat-alat yang dapat digunakan. Metode untuk mengembangkan suatu sistem informasi berikut teknik dan alat-alatnya disebut metodologi. Metodologi yang digunakan di buku ini adalah metodologi pengembangan sistem terstruktur.
        Buku ini terdiri dari empat bagian utama: Bagian pertama, sebagai konsep dasar perlu dibaca terlebih dahulu bagi pembaca yang belum memahami tentang sistem, informasi, sistem informasi dan pengembangan sistem. Bagian ini terdiri dari dua bab, yaitu bab 1 dan bab 2.
        Bagian kedua, membahas tentang pengembangan sistem itu sendiri. Bagian ini terdiri dari 7 bab.
        Bagian ketiga, disajikan dalam bentuk 15 modul, membahas tentang teknik-teknik dan alat-alat yang dapat digunakan untuk mengembangkan sistem secara terstruktur. Dibuat dalam bentuk modul, karena tiap-tiap modul sering digunakan oleh bab-bab di bagian kedua, sehingga tidak harus selalu dibahas di bab 2. Bagian keempat terdiri dari empat buah lampiran mengenai pengembangan sistem SADT, Warnier/Orr dan JSD.

        </Text>
      </Box>
    <Center><Button colorScheme="blue">Pinjam</Button> </Center>

  </Box>
   


  );
}

export default Buku;
