import React from "react";

const CountryInfo = ({ country }) => {
    const { name, flag, capital, population, region, flags } = country;

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div class="h4 pb-2 mb-4 text-dark border-bottom border-dark">
                    {name.common} <span>{flag}</span>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={flags.png} alt={`${name.common} Flag`} className="img-thumbnail" />
                    </div>

                    <div className="col-md-6">
                        <p><span className="text-uppercase fw-bold">Capital: </span> {capital}</p>
                        <p><span className="text-uppercase fw-bold">Population: </span> {population}</p>
                        <p><span className="text-uppercase fw-bold">Region: </span> {region}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryInfo;