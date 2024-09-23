import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event
                            event="Wake up and pretend to be ready"
                            color="pink"
                        />
                        <Event event="LeetCode Grind 😵‍💫" color="green" />
                        <td></td>
                        <Event
                            event="Watch YouTube: 'How to Ace Interviews'"
                            color="blue"
                        />
                        <td></td>
                        <Event
                            event="Spam LinkedIn for referrals"
                            color="pink"
                        />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <Event
                            event="Reach out to old college friends for job tips"
                            color="pink"
                        />
                        <Event
                            event="LeetCode until brain melts"
                            color="green"
                        />
                        <Event
                            event="Watch coding tutorial - maybe learn something"
                            color="blue"
                        />
                        <td></td>
                        <Event
                            event="Beg on LinkedIn for interview insights"
                            color="pink"
                        />
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event
                            event="Stare at LeetCode question, cry a little"
                            color="green"
                        />
                        <td></td>
                        <Event
                            event="YouTube: 'What is data structures again?'"
                            color="blue"
                        />
                        <td></td>
                        <Event
                            event="Another LinkedIn referral request (with hope)"
                            color="pink"
                        />
                        <td></td>
                        <Event event="Caffeinate and code" color="green" />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <Event
                            event="LeetCode: Question harder than life"
                            color="green"
                        />
                        <Event
                            event="Message strangers for job referrals"
                            color="pink"
                        />
                        <td></td>
                        <Event
                            event="Watch 'How to crush behavioral interviews'"
                            color="blue"
                        />
                        <Event
                            event="Code and contemplate life choices"
                            color="green"
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event="Networking attempt #527" color="pink" />
                        <Event
                            event="Watch '10-hour Python crash course'"
                            color="blue"
                        />
                        <Event
                            event="LeetCode: Just one more question!"
                            color="green"
                        />
                        <Event
                            event="Code while snacking (multitasking pro)"
                            color="green"
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event
                            event="YouTube: 'Top 10 coding interview fails'"
                            color="blue"
                        />
                        <Event
                            event="LeetCode, but now with confidence"
                            color="green"
                        />
                        <td></td>
                        <Event
                            event="Send LinkedIn requests with a hopeful smile"
                            color="pink"
                        />
                        <td></td>
                        <Event
                            event="More tutorials to calm the nerves"
                            color="blue"
                        />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <Event
                            event="Coding interview practice (survival mode)"
                            color="green"
                        />
                        <Event
                            event="Watch 'Behavioral Interview Tips'"
                            color="blue"
                        />
                        <td></td>
                        <Event
                            event="Send follow-up messages on LinkedIn"
                            color="pink"
                        />
                        <Event
                            event="Code like your career depends on it"
                            color="green"
                        />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event
                            event="Final LinkedIn spam session of the day"
                            color="pink"
                        />
                        <Event
                            event="LeetCode: Success (maybe?)"
                            color="green"
                        />
                        <td></td>
                        <Event
                            event="Watch 'Mock interview' sessions"
                            color="blue"
                        />
                        <Event
                            event="Deep dive into algorithms"
                            color="green"
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <Event
                            event="Watch YouTube: 'How to get referrals'"
                            color="blue"
                        />
                        <td></td>
                        <Event
                            event="LeetCode: Another challenge accepted"
                            color="green"
                        />
                        <td></td>
                        <Event
                            event="Try to remember behavioral interview stories"
                            color="blue"
                        />
                        <Event event="Networking cooldown" color="pink" />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event="One last LeetCode sprint" color="green" />
                        <Event
                            event="Watch YouTube: Coding memes for sanity"
                            color="blue"
                        />
                        <Event
                            event="Check LinkedIn: Any responses?"
                            color="pink"
                        />
                        <Event event="Coding wind down" color="green" />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
