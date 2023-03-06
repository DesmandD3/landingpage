import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import style from "@/styles/Home.module.css"

import { Icon } from "leaflet";

import React from 'react'

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    CircleMarker
} from 'react-leaflet'

export default function Map() {

    const trainIcon = new Icon({
        iconUrl: "trainIcon2.svg",
        iconSize: [40, 40]
    });

    const posWater = [49.28594, -123.11129];
    const posBurrard = [49.28566904926404, -123.11997222272772];
    const posGranville = [49.28335955912636, -123.11616348595913];
    const posStadium = [49.27977613603898, -123.10976909962109];
    const posMain = [49.27330851820787, -123.10032772386313];
    const posCommercial = [49.26276532344843, -123.06895660727297];
    const posNanaimo = [49.248396069081295, -123.05595325799037];
    const pos29thAve = [49.24440386713434, -123.04558920230572];
    const posJoyce = [49.23850602387262, -123.03101944297005];
    const posPatterson = [49.229903155951234, -123.01249074308997];
    const posMetro = [49.225909458945516, -123.00336050363676];
    const posRoyalOak = [49.22019861209494, -122.98776077588772];
    const posEdmonds = [49.21240059362749, -122.9590062591951];
    const pos22ndSt = [49.19998083159568, -122.948808610817];
    const posNewWest = [49.20178337669102, -122.91048738010707];
    const posColumbia = [49.205204977889025, -122.90532872635256];
    const posScott = [49.20472835112317, -122.87239671377016];
    const posGateway = [49.19924681299981, -122.84881801788136];
    const posSurrey = [49.18984847673752, -122.84649922901706];
    const posKingG = [49.183122121977355, -122.84347698743535];
    const posSapper = [49.22467101107625, -122.88945869090497];
    const posBraid = [49.2330258901662, -122.88309426490396];
    const posLougheed = [49.249083010309626, -122.8954899775513];
    const posProduction = [49.25386612850607, -122.91702039210884];

    const blueOption = { color: 'blue' };
    // const redOption = { color: 'red' };

    const mainLine = [
        posWater,
        posBurrard,
        posGranville,
        posStadium,
        posMain,
        posCommercial,
        posNanaimo,
        pos29thAve,
        posJoyce,
        posPatterson,
        posMetro,
        posRoyalOak,
        posEdmonds,
        pos22ndSt,
        posNewWest,
        posColumbia,
        posScott,
        posGateway,
        posSurrey,
        posKingG,
    ];
    const extLine = [
        posColumbia,
        posSapper,
        posBraid,
        posLougheed,
        posProduction,
    ];

    return (
        <>
            <MapContainer
                className={style.map}
                center={posMetro}
                zoom={12}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={trainIcon} position={posWater}>
                    <Popup>
                        Waterfront <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posBurrard}>
                    <Popup>
                        Burrard <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posGranville}>
                    <Popup>
                        Granville <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posStadium}>
                    <Popup>
                        Stadium - Chinatown <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posMain}>
                    <Popup>
                        Main St - Science World <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posCommercial}>
                    <Popup>
                        Commercial-Broadway <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posNanaimo}>
                    <Popup>
                        Nanaimo <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={pos29thAve}>
                    <Popup>
                        29th Avenue <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posJoyce}>
                    <Popup>
                        Joyce - Collingwood <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posPatterson}>
                    <Popup>
                        Patterson <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posMetro}>
                    <Popup>
                        Metrotown <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posRoyalOak}>
                    <Popup>
                        Royal Oak <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posEdmonds}>
                    <Popup>
                        Edmonds <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={pos22ndSt}>
                    <Popup>
                        22nd Street <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posNewWest}>
                    <Popup>
                        New Westminster <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posColumbia}>
                    <Popup>
                        Columbia <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posScott}>
                    <Popup>
                        Scott Road <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posGateway}>
                    <Popup>
                        Gateway <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posSurrey}>
                    <Popup>
                        Surrey Central <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posKingG}>
                    <Popup>
                        King George <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posSapper}>
                    <Popup>
                        Sapperton <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posBraid}>
                    <Popup>
                        Braid <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posLougheed}>
                    <Popup>
                        Lougheed Town Centre <br /> Station
                    </Popup>
                </Marker>

                <Marker icon={trainIcon} position={posProduction}>
                    <Popup>
                        Production Way - University <br /> Station
                    </Popup>
                </Marker>

                {/* <CircleMarker
                center={[49.27450, -123.12189]}
                pathOptions={redOption}
                radius={20}
            >
                <Popup>finish <br />Station</Popup>
            </CircleMarker> */}

                <Polyline pathOptions={blueOption} positions={mainLine} />
                <Polyline pathOptions={blueOption} positions={extLine} />
            </MapContainer>
        </>
    )
}