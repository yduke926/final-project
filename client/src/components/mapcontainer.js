import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
    render() {
        return(
       <Map 
            google={this.props.google}
            initialCenter={{
              lat: 47.66045373274005,
              lng: -117.40627703256906,
       }}
            zoom={13}
       >
       
       <Marker onClick={this.onMarkerClick}
              //  icon={{url: "https://s3.amazonaws.com/meditrack/cardiogram.png"}} 
               name={'Elson S. Floyd College of Medicine'} />
       <Marker
              onClick={this.onMarkerClick}
              // icon={{url: "https://s3.amazonaws.com/meditrack/cardiogram.png"}} 
              name={'Columbia Medical Associates'}
              position={{lat: 47.662870, lng: -117.394200}} />
       <Marker
              onClick={this.onMarkerClick}
              // icon={{url: "https://s3.amazonaws.com/meditrack/cardiogram.png"}} 
              name={"Shriners Hospital for Children"}
              position={{lat: 47.650950, lng: -117.425800}} />
        <Marker
              onClick={this.onMarkerClick}
              // icon={{url: "https://s3.amazonaws.com/meditrack/cardiogram.png"}} 
              name={"Multicare Rockwood Main Clinic"}
              position={{lat: 47.650840, lng: -117.405240}} />
         <Marker
              onClick={this.onMarkerClick}
              // icon={{url: "https://s3.amazonaws.com/meditrack/cardiogram.png"}} 
              name={"Cancer Care Northwest"}
              position={{lat: 47.668450, lng: -117.232910}} />
         <Marker
              onClick={this.onMarkerClick}
              // icon={{url: "https://s3.amazonaws.com/meditrack/cardiogram.png"}} 
              name={"Kaiser Permanente"}
              position={{lat: 47.668450, lng: -117.232910}} />     
         <Marker
              onClick={this.onMarkerClick}
              // icon={{url: "https://s3.amazonaws.com/meditrack/cardiogram.png"}} 
              name={"CHAS Health"}
              position={{lat: 47.657880, lng: -117.429580}} />     
         <Marker
              onClick={this.onMarkerClick}
              // icon={{url: "https://s3.amazonaws.com/meditrack/cardiogram.png"}} 
              name={"Providence Holy Family Hospital"}
              position={{lat: 47.709900, lng: -117.406820}} />   




                {/* <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>        */}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                        <div>
                        <h6>{this.state.selectedPlace.name}</h6>
                        </div>
                    </InfoWindow>
                    <InfoWindow
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        visible={this.state.showingInfoWindow}>
                            <div>
                            <h6>{this.state.selectedPlace.name}</h6>
                            </div>
                </InfoWindow>
            </Map>
        );
    }
  }

  const LoadingContainer = (props) => (
      <div id="map"></div>
  )
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyBy6jiwIZ_MF6R_ZVQvWbbS_mUSWGhrV5A"),
    // LoadingContainer: LoadingContainer
  })(MapContainer)