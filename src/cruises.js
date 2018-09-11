import React from 'react';

class CruiseNavButton extends React.Component {
    render() {
        return <a data-toggle="tab" href="#cruises"><i className="flaticon-boat"></i> Cruises</a>;
    }
}

class Cruise extends React.Component {
    render() {
      return <form method="post"
        className="colorlib-form"
        action="http://cruises-r-us/search.php">
      <div className="row">
       <div className="col-md-4">
           <div className="form-group">
        <label htmlFor="date">Where:</label>
        <div className="form-field">
          <input type="text" id="location" className="form-control" placeholder="Search Location" />
        </div>
      </div>
       </div>
    <div className="col-md-3">
      <div className="form-group">
        <label htmlFor="date">Start Date:</label>
        <div className="form-field">
          <i className="icon icon-calendar2"></i>
          <input type="text" id="date" className="form-control date" placeholder="Check-in date" />
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="form-group">
        <label htmlFor="guests">Categories</label>
        <div className="form-field">
          <i className="icon icon-arrow-down3"></i>
          <select name="category" id="category" className="form-control">
            <option value="#">Suite</option>
            <option value="#">Super Deluxe</option>
            <option value="#">Balcony</option>
            <option value="#">Economy</option>
            <option value="#">Luxury</option>
          </select>
        </div>
      </div>
    </div>
    <div className="col-md-2">
      <input type="submit" name="submit" id="submit" value="Find Cruises" className="btn btn-primary btn-block" />
    </div>
  </div>
</form>;
    }
  }

export { Cruise, CruiseNavButton };