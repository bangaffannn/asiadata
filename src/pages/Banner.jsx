import React from "react";

export default function Banner() {
  return (
    <div className="bg-cover bg-center bg-gradient-to-br from-purple-800 to-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center p-6 md:p-12 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-50">
          <svg
            fill="#ffff"
            height="250px"
            width="250px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.846 511.846"
            xml:space="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M468.881,0H332.348c-26.402,0-46.071,8.405-65.766,28.1c-3.336,3.337-3.336,8.73,0,12.066
				c3.337,3.337,8.73,3.337,12.066,0c16.623-16.623,31.684-23.1,53.7-23.1h136.533c14.114,0,25.6,11.486,25.6,25.6V179.2
				c0,22.025-6.477,37.077-23.108,53.7L217.95,486.682c-9.677,9.668-26.547,9.66-36.198,0L24.866,329.796
				c-4.838-4.838-7.501-11.264-7.501-18.108c0-6.835,2.662-13.261,7.501-18.091L253.918,64.87c3.516,0.896,7.049,1.792,10.701,2.773
				c34.722,9.301,62.114,18.91,82.534,27.494c-4.019,7.432-6.272,15.77-6.272,24.329c0,28.237,22.963,51.2,51.2,51.2
				s51.2-22.963,51.2-51.2c0-28.237-22.963-51.2-51.2-51.2c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533
				c18.825,0,34.133,15.309,34.133,34.133c0,18.825-15.309,34.133-34.133,34.133s-34.133-15.309-34.133-34.133
				c0-6.144,1.681-12.143,4.779-17.365c14.78,7.074,24.021,13.039,27.674,16.845c-1.562,0.444-3.977,0.939-7.62,1.254
				c-4.693,0.418-8.166,4.557-7.748,9.25c0.393,4.437,4.113,7.791,8.491,7.791c0.247,0,0.503-0.017,0.759-0.034
				c5.248-0.469,21.214-1.877,24.286-13.321c8.405-31.394-114.756-66.091-139.529-72.73c-37.897-10.155-74.3-17.101-102.494-19.558
				c-34.671-3.038-51.541,0.913-54.707,12.774c-1.527,5.692-5.572,20.804,63.607,48.085c4.403,1.724,9.344-0.418,11.076-4.813
				c1.724-4.378-0.427-9.336-4.804-11.059c-33.425-13.184-47.275-22.844-51.729-27.392c10.539-3.089,46.524-2.193,104.465,10.982
				L12.8,281.523c-8.064,8.064-12.501,18.773-12.501,30.165c0,11.401,4.437,22.118,12.501,30.174l156.885,156.885
				c8.055,8.055,18.765,12.493,30.165,12.493c11.392,0,22.101-4.437,30.174-12.501l253.423-253.773
				c19.703-19.695,28.1-39.364,28.1-65.766V42.667C511.548,19.14,492.407,0,468.881,0z"
                  />
                  <path
                    d="M443.068,312.107c-4.079-2.398-9.301-1.024-11.682,3.046l-97.809,166.835c-7.066,12.228-22.741,16.444-34.594,9.6
				l-19.063-12.348c-3.951-2.569-9.242-1.434-11.793,2.517c-2.569,3.951-1.434,9.242,2.517,11.802l19.43,12.578
				c6.699,3.874,14.02,5.709,21.265,5.709c14.754,0,29.107-7.637,36.983-21.274l97.783-166.793
				C448.486,319.718,447.13,314.488,443.068,312.107z"
                  />
                  <path
                    d="M204.348,247.467v119.467c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533V247.467
				c0-4.71-3.814-8.533-8.533-8.533S204.348,242.756,204.348,247.467z"
                  />
                  <path
                    d="M255.548,273.067c0,9.412,7.654,17.067,17.067,17.067s17.067-7.654,17.067-17.067c0-9.412-7.654-17.067-17.067-17.067
				S255.548,263.654,255.548,273.067z"
                  />
                  <path
                    d="M136.081,324.267c0,9.412,7.654,17.067,17.067,17.067c9.412,0,17.067-7.654,17.067-17.067S162.56,307.2,153.148,307.2
				C143.735,307.2,136.081,314.854,136.081,324.267z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <div className="md:ml-8 text-center md:text-left mt-4 md:mt-0">
            <h1 className="font-bold text-4xl md:text-6xl mb-4">
              #BulanPenuhDiskon!
            </h1>
            <h1 className="font-bold text-4xl md:text-6xl mb-4">
              #BulanPenuhBonus!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-8 md:ml-0 mt-4">
              <ul className="flex flex-col justify-start items-start gap-y-2">
                <li className="px-4 py-2 rounded-lg bg-accent text-white text-start">
                  GRATIS GOOGLE ADS INSTALLMENT
                </li>
                <li className="px-4 py-2 rounded-lg bg-accent text-white text-start">
                  GRATIS GOOGLE ADS CAMPAIGN
                </li>
                <li className="px-4 py-2 rounded-lg bg-accent text-white text-start">
                  GRATIS KEYWORD RESEARCH
                </li>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-y-2">
                <li className="px-4 py-2 rounded-lg bg-accent text-white text-start">
                  GRATIS HOSTING DAN DOMAIN SERVER
                </li>
                <li className="px-4 py-2 rounded-lg bg-accent text-white text-start">
                  GRATIS SERVER DAN UPDATE MAINTENANCE
                </li>
                <li className="px-4 py-2 rounded-lg bg-accent text-white text-start">
                  GRATIS SSL SECURITY
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
