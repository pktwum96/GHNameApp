import React from 'react';

export const Questions = () => {
    return (
        <div>
            <div className="questionnaire">
                <label htmlFor="Ethnic">
                    What Ethnic Group would you want to named from?
                </label>
                <select name="Ethnic Groupsrs">
                    <option value="Ga">Ga</option>
                    <option value="Twi">Twi</option>
                    <option value="Ewe">Ewe</option>
                    <option value="Any">Any</option>
                </select>
                <label>What gender name willl you prefer?</label>
                <select name="Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Either">Either</option>
                    <option value="Other">Non-Gendered</option>
                </select>
                <label>What day of the week were you born?</label>
                <select name="Day of the week">
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                <label>
                    If you do not know, please enter your date of
                    birth
                </label>
                <input type="date" />
                <label>Are you a twin?</label>
                <select name="twin">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <label>If so which are you?</label>
                <label>Were you born after twins?</label>
                <select name="twin">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <label>I am the ___ child after twins</label>
            </div>
        </div>
    );
};
