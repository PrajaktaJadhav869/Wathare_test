import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

public class SampleDataGenerator {
    
    // Method to generate sample data
    public static List<DataEntry> generateSampleData(Date startTime, Date endTime, long intervalMillis) {
        List<DataEntry> data = new ArrayList<>();
        long currentTime = startTime.getTime();

        // Random number generator
        Random random = new Random();

        while (currentTime <= endTime.getTime()) {
            // Simulate machine status (0, 1, or missing)
            Integer machineStatus = random.nextInt(3); // 0, 1, or 2
            if (machineStatus == 2) {
                machineStatus = null; // Represent missing data as null
            }

            // Create data entry
            DataEntry entry = new DataEntry(new Date(currentTime), machineStatus);
            data.add(entry);

            // Move to the next timestamp
            currentTime += intervalMillis;
        }

        return data;
    }

    public static void main(String[] args) {
        // Define start and end time
        Date startTime = new Date(2024 - 1900, 0, 1, 0, 0, 0); // January 1, 2024, 00:00:00
        Date endTime = new Date(2024 - 1900, 0, 1, 23, 59, 59); // January 1, 2024, 23:59:59

        // Define time interval (in milliseconds)
        long intervalMillis = 1000; // 1 second

        // Generate sample data
        List<DataEntry> sampleData = generateSampleData(startTime, endTime, intervalMillis);

        // Print sample data
        for (DataEntry entry : sampleData) {
            System.out.println(entry);
        }
    }
}

// DataEntry class representing a single data entry
class DataEntry {
    private Date timestamp;
    private Integer machineStatus;

    public DataEntry(Date timestamp, Integer machineStatus) {
        this.timestamp = timestamp;
        this.machineStatus = machineStatus;
    }

    // Getters and setters
    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public Integer getMachineStatus() {
        return machineStatus;
    }

    public void setMachineStatus(Integer machineStatus) {
        this.machineStatus = machineStatus;
    }

    // Override toString() method for printing
    @Override
    public String toString() {
        return "DataEntry{" +
                "timestamp=" + timestamp +
                ", machineStatus=" + machineStatus +
                '}';
    }
}
