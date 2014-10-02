angular.module('clockworkAPI', [])
    .factory('clockwork', function clockwork($http) {
        return {
            sendMessage: function sendMessage(eventname, eventdate, name, number){

                // First define the API key required
                var key = "3d802e1a98e996ed08a389b4aff6c5deafdd3bec";

                // Next define the message to be sent to the recipient
                var message = "Hi " + name + " fancy coming to my event: " + eventname + " on the " + eventdate + "? This text was sent using the Clockwork API.";

                $http.get('https://api.clockworksms.com/http/send.aspx', { params: { key : key, to: number, content: message}})
//                    .success(function (data) {
//                        callback(null, data);
//                    })
//                    .error(function (e) {
//                        callback(e);
//                    });
            }
        };
    } );