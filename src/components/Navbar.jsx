import Login from "./Login";
import { useState, useEffect } from "react";
const Navbar = ({ Navbuttons }) => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            <div class="bg-white w-full h-20 flex justify-between ">
                <div class="flex items-center w-48 h-full ml-10">
                    <img src="/airbnb-logo-icon-png-svg.png" alt="airbnb logo" class="w-8 h-8 ml-10" ></img>
                    <span class="flex text-2xl font-bold" id="logo">airbnb</span>
                </div>
                <div id="navbuttons" class="w-1/3 h-full justify-center items-center">
                    {Navbuttons && <Navbuttons />}
                </div>
                <div class="w-1/4 h-full flex items-center" >
                    <div class="w-full h-full justify-center items-center flex space-x-2">
                        <a href="#" class="h-10 w-42  hover:bg-customgray hover:rounded-3xl flex items-center"><p className="text-sm">Airbnb your home</p></a>
                        <a href="#" class="items-center justify-center flex  h-10 w-11  hover:bg-customgray rounded-3xl"><img class="w-6 h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA5dJREFUSEvFl2fIjlEYx3+vUVayR8kmMj4oq5RVilCSlS1kU1JEyhaSlcjKKDtkfjCysks+oGTvnVlknX9dt85zO89zP4/eeq8v73nOfc71P9d1/ud/XW8eBWR5BYRLrsCFgVZATaCqHfoZcB+4DPzMNpBsgesB04AeQJk0zt8C+4AFwL2kAyQBlwAWAmMARZuNfQcWA7MBjYOWCbgGcBhoFNj5GVAW5PgOUC6w5grQ1R36VQg5HXBD4Jzn8DRwAxhvTsYCq23cF9huY83VBTrZ76dAa+BxHDwEXAXQaasBv4HhwEbgFtDA7k/R/jJn8nEdaArctAwNAja5dBeyOYF/9MFDwDvd4t4GOhjYCjQDrtnG0cCaWAR+1G2BM+4K+rvot9m65cCkTMBNLKVas8Gi1XiWi3Am8AMoC+iOfSsGvHdE1N8dQD/7KB/D3Iv4BtQCnkeb4hFvdqlUmgRQx216ZAtPAe0sEkUUsl1AL+ATUNoWiKB37UXMB6aHgIsC74BSwEGgu3eHX4DiQMrmGPo4YKXNSVxe2Fgvo4uxv34IuCNw3D6IvatsXAl4meF+I1/+/g6AsiSb6ERnmY0FrOeXIplDjIma171IBmW6G7FaNgM4nybVOqCIKVtiGqCxwNbafDfgUBx4CrAojdP8mhazxfCUiCfbSfMLJORHGEvjwP5b9FNd3aVbbJfNAU6mOVkFJx67A6mubU9Tn/oAYn9KxCp3F2yj1EpvUFYeeGNjXYfuL2RtgLP2obMrn8c8X+ts3Nzp99U4sKqPnoBOrghFtmjNVxMHabF0OmRDPRKKkA9sUaQNqtuRDP/TCIh9I02ZlKLXtlmZUEak4S3SAEtaB9geMVxW2QSkpL3xCdHeuHKJ+rftCtYDI2zhCqtM6jDUCMQlU37UCEhOdYe6S5kKhTKngiIljLIQbH0k7BJ4meRTkfjioAISkSgKQCp3wH5Ip6XXA4EtNqdMjvIzFapOFa1/Ul+lk+r0+023JYWXLO2+HzG9vem01qge77GyqHKqsvghCVjfVW8veo3AEbs7lUmZtPeojSWPJ2ysNIukPe23CNXSVbkncV5kan0UsYpF4wCZ5FBdikBU/NU8xE31WxL5txRmE3G0Rmyc66qW2KhuIhtTH6YGcd7/Nns+iFqeqdbeRrU2fgixeq+VzodJJ0xqb+P7ixhRJKN+Q69irzce9WFJuDn/J5HoMNsFuUacrd/EdX8AF1i0Hzzzo+MAAAAASUVORK5CYII=" /></a>
                        <div class="w-24 h-1/2 justify-center items-center flex bg-white">
                            <a href="#" class=" items-center flex  h-10 " id="login" onClick={() => setShowLogin(true)}>
                                <img id="img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGZJREFUSEvtlrENACAMw8pnnMZpfAYTC1W3CDOEA2JhUpUW0GkQNwx+Zt6qj+ohdp7yKtVLDE6c78DiC+c4t/o46WLX8877rlzYOGGqxU/scYryB4KVCwNja9GtlhvwWpQrrQIx1Rt3TwofeC3yFwAAAABJRU5ErkJggg==" />
                                <img id="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAArlJREFUSEvFlluIjlEUhp9xiqSEyaFEzuVKIqKUXKLkgiuhFCkhhJqUUyQhUhQlFwp3uOKC5JCQU+RULhAhLhwS4nuntf/2v9vf3t/8M5pVU9P/7bXedXzXaqKTpKmTcGkrcBdgMjACGGJOvwVeAreAv1UDqQo8DNgMzAf6lxj/AJwFdgKvcw7kgHsALcCGwqD+ryI/gR3mwJ8yhRTwYOBc8TexClrkzRXL0KeYfhnwcOAGMKhBUKem2k8BPoZ2YsB9gdvAyHaCOvW7wHTgh28vBnwcWJIB/Q08tTfjgK6Z97uBjSngscATSI7ZGWAF4Go3oBito8C8BPh3QOVT57dKGLEMLEsYUNo0x2G3quPvA4q+TLYWc74lBqx0fQb6JJRXAodLvq8tdPcmdFWammN+xDOAy5lazQYulLzRN41fSsYAz8NULwJOZBTXAPsbjFhqc51zfsTrgD0Z4EfABEBd7Us34DEwOqO/GjgQRpyrkbN5Glhu/aDfmoEjma52usLYFwIvBE5lPHafFbHGrrtFmZtjp7cAkON14yRqE03+T5lkrFgHrF37zlIXA9euFfGrqxXtN3vUGxgPzDFqLHP8DTDU7eyQQDSjYqVQ7gGLjSRSGVFEJ4uSiQFDUW1V41YJgUdZNOpSJ+8touh6iwDoMnkI9PO+/bKrpXYgxJbEMWCpp/QFmFWk8k7F4mt/XyrmXVvOyUFgla8fA5anN4OZ/ApsBw55tQ39ENXK+KaCD1R3Jw+AaYBs1KTsENAxdx0YGFjXlrkIXAOe2TrU3hbdzgR6Be9f2SGgctVJ6vRRrc4bU1XMct2zq0YqbTp9nIWetsrWV1j2TkfH3jZgV2R9ZlMdRigOVu207P2m8d8pnToSdG20+7wNHRA1TgV0Z+sKFanooH9hjNThB30jNU7q5A76Dgd0Bv8BIyR2H9l/W1MAAAAASUVORK5CYII=" /></a>
                        </div>
                    </div>

                </div>
            </div>
            {showLogin && <Login setShowLogin={setShowLogin} />}
        </>

    )
}



export default Navbar;