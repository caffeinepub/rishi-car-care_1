import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type Message = {
    name : Text;
    email : Text;
    content : Text;
  };

  // Only allow admin to get all messages
  let admins = Map.singleton(Principal.fromText("2vxsx-fae"), "Admin");
  let messages = Map.empty<Principal, Message>();

  func assertAdmin(caller : Principal) {
    if (not admins.containsKey(caller)) {
      Runtime.trap("Caller is not admin");
    };
  };

  public shared ({ caller }) func submitMessage(name : Text, email : Text, content : Text) : async () {
    messages.add(caller, { name; email; content });
  };

  public shared ({ caller }) func getAllMessages() : async [Message] {
    assertAdmin(caller);
    messages.values().toArray();
  };
};
