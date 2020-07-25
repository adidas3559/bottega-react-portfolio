import React from "react";
import profilePic from "../../../static/assets/images/me.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column"
                style={{
                    background: "url(" + profilePic + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

            </div>

            <div className="right-column">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra leo vel neque eleifend sodales nec eu erat. Nullam dapibus mollis diam, nec tristique justo gravida ac. Nullam cursus sem malesuada mi congue molestie. Vivamus tempus eros nec arcu aliquet rutrum. Morbi pharetra est nibh, eu scelerisque leo placerat ut. Morbi molestie urna vel velit hendrerit mattis. Fusce et eros quis purus rhoncus auctor non nec velit. Vivamus nec risus est. Sed nisi lorem, elementum nec laoreet ut, sagittis ac risus. Ut finibus velit ac rhoncus rutrum. Nullam et ultricies nibh, sed imperdiet sapien. Nulla a interdum arcu, et scelerisque lorem. Donec at vestibulum lectus. Sed euismod condimentum feugiat. Proin accumsan euismod risus eu dapibus. Quisque eu leo a justo interdum vestibulum sed eget ex.

                Vestibulum dignissim arcu non urna aliquam, sagittis bibendum dui sollicitudin. Ut sed dui eget magna accumsan dictum ut vel augue. Nullam molestie diam ornare elit porttitor, ut varius purus imperdiet. Aliquam quis efficitur ipsum. Nulla venenatis felis finibus commodo fermentum. In rutrum ex orci, at condimentum quam laoreet vel. Vivamus a tellus bibendum, malesuada sapien quis, ultrices quam. Curabitur quis finibus ante. Quisque mattis, arcu ac tincidunt imperdiet, mauris purus ullamcorper purus, eu efficitur ex neque vel ex. Nullam in leo aliquam, suscipit eros eu, sodales justo. Suspendisse sodales ex in quam hendrerit, et laoreet ipsum sagittis. Pellentesque suscipit accumsan nisl scelerisque lacinia.
            </div>
        </div>
    );
}