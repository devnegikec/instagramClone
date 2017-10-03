var a = [0, 5, 7, 2, -1, -5, 6, 5,-6, 12, 16, 14, 12]; // legnth 8



function daysInWinter(days) {
		if (days.length < 3) {
			console.log("Array length less than 3");
		} else {
			var firstDayOfSummer = true;
			var dayIndex = 1;
			var hottestDay = days[0];
			for (var i = 1; i < days.length; i++) {
				if (hottestDay < days[i]) {
					hottestDay = days[i];
					if (firstDayOfSummer) {
						dayIndex = i;
						firstDayOfSummer = false;
					}
				}

				if (days[dayIndex] > days[i + 1]) {
					firstDayOfSummer = true;
				}
			}

			if (firstDayOfSummer) {
				console.log("No such element exists");
			} else {
				console.log("days in summer", dayIndex+1);
				// console.log("Element is:-" + array[elementIndex] + "and index :-", elementIndex);
			}

		}
	}