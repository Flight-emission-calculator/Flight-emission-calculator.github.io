function Information1() {

  return (
    <div>
        <ul className="info-categories-list">
            <li>
              The CO2 emission from air trips
              <div className="info-categories-list--sublist">
                <p>The CO2 emissions are calculated with the FlightEmissionMap factor (FEM factor).</p>
                <p>
                  The FEM factor is a fixed factor that for the year of 2021 is set to 133 g CO2 per passenger and per km. The FEM factor is valid for economy class and it includes 
                  non-CO2 effects and emissions from production and distribution of fuel.
                </p> 
                <p>The CO2 emissions are calculated with the formula: flight distance multiplied with the FEM factor.</p>
                <p>Read more on: <a href="https://flightemissionmap.org/">flightemissionmap.org</a></p>
              </div>
              <br></br>
              The distance between two destinations
              <div className="info-categories-list--sublist">
                <p>The flight distance, that is used to calculate the carbon emission, is calculated by using the Haversine formula.</p>
                <p>The haversine formula defines the distance between two points on a sphere given their longitudes and latitudes.</p>
              </div>

            </li>
           
            <li>The carbon budget % and months of the year
              <div className="info-categories-list--sublist">
                <p>The individual carbon budget is set to 2000 kg CO2 per year based on the goals set out in the Paris Agreement that the CO2 emission per capita cannot exceed the number of 2 tonnes per year. This is according to the IPCC report.</p>
                <p>The percentage is calculated with the simple formula of: emissions from air trip (kg) devided by 2000 (kg), and then multiplied with a 100 to get the percentage figure.</p>
                <p>Moths of the year are calculated using the same percentage number recieved from the calculations above, but instead multiplied with 12 since that is the number of months of a year.</p>
              </div>
            </li>

            <li>The % of a household's electricity and months with/wothout electricity
              <div className="info-categories-list--sublist">
                <p>In Sweden, a normal energy consumption for a villa is about 20,000 kWh/year. This number comes from Statistiska Central Byrån (scb.se).</p>
                <p>kWh can be tranformed to kilograms of CO2. According to <a href="https://www.utslappsratt.se/berakna-utslapp/berakning-av-utslapp-i-hemmet/">Utsläppsrätt.se</a> 20,000 kWh is equal to 1800 kg CO2.</p>
                <p>The percentage is calculated with the simple formula of: emissions from air trip (kg) devided by 1800 (kg), and then multiplied with a 100 to get the percentage figure.</p>
                <p>Moths of the year are calculated using the same percentage number recieved from the calculations above, but instead multiplied with 12 since that is the number of months of a year.
                  This way the number of months both with and without electricity can easily be calculated.
                </p>
              </div>
            </li>

            <li>The amount of kilograms of plastic recucle and the years it would take
             <div className="info-categories-list--sublist">
                <p>According to the World Health Organization, 1 kg of recycled plastics can save 1.5 kg of CO2.</p>
                <p>The calculations of how many kg of plastic needs to be recycled in order to reduce the amount CO2 that is emitted by the air trip, are therefore made as follows:
                </p>
                <p>Emissions from air trip (kg) devided by 1.5 (kg).</p> 

                <p>According to sopor.nu around 81,100 tonnes of plastic containers were collected in Sweden during the year of 2019.</p>
                <p>To calculate how many kg of plastic each individual recycled, 81,100 tonnes was devided by the population in 2019 which was 10.23 million people.</p>
                <p>This calculations resulted in the conclusion that 8 kg of plastic is recycled per capita per year in Sweden. This is the number used to calculate how many years it will take to recycle the amount of plastic needed to reduce the amoung of CO2 emitted by the air trip.</p>
              </div>
            </li>

        </ul> 
    </div>
  );
}

export default Information1;