import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/Foto.jpeg")} style={styles.image} />
      <Text style={styles.header}>Emesson Silva</Text>
      <Text style={styles.subheader}>
        Analysis and Systems Development Student
      </Text>
      <Text style={styles.paragraph}>
        Hi, I'm Emesson Silva, I'm 21 years old, I'm Analysis and Systems
        Development Student and I live in the city of Recife - PE.
      </Text>
      <Text style={styles.paragraph}>
        Technologies I've had experience with:
      </Text>
      <Text style={styles.listItem}>
        • Libraries and Frameworks: React, Angular, Flutter.
      </Text>
      <Text style={styles.listItem}>
        • Programming languages: TypeScript, JavaScript, C, C#.
      </Text>
      <Text style={styles.listItem}>• Database: MySQL, MongoDB.</Text>
      <Text style={styles.listItem}>• Development tools: Git, GitHub.</Text>
      <Text style={styles.paragraph}>
        I'm currently looking to enter the I.T. field, either through an
        internship or another position, with a focus on web development, but I'm
        not limited to this area and I'm always willing to learn.
      </Text>
      <Text style={styles.paragraph}>
        You can check out my portfolio at {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://emessonblog.netlify.app")}
        >
          emessonblog.netlify.app
        </Text>{" "}
        {""}
        and explore my work on GitHub at {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/emessonSilva")}
        >
          github.com/emessonSilva
        </Text>
        .
      </Text>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Bilingual Customer Support Agent at Speed+
      </Text>
      <Text style={styles.paragraph}>• Oct 2023 - Present</Text>
      <Text style={styles.paragraph}>
        • I work just on weekends at the company. There I handle customer
        tickets for an app called Bolt Food (similar to IFood). The tickets can
        be complaints, requests, etc. I answer in English or Portuguese.
      </Text>
      <Text style={styles.subheader}>
        Technology Residency at Porto Digital
      </Text>
      <Text style={styles.paragraph}>• Mar 2023 - Present</Text>
      <Text style={styles.paragraph}>
        • During my degree in Analysis and Systems Development, I take part in
        projects for real companies every semester.
      </Text>
      <Text style={styles.subheader}>DIO Campus Expert at DIO</Text>
      <Text style={styles.paragraph}>• Mar 2024 - April 2024</Text>
      <Text style={styles.paragraph}>
        • I was one of those chosen for the seventh edition of the program,
        which aims to train university leaders through mentoring and practical
        activities, preparing students to inspire the next generation of tech
        talent.
      </Text>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Degree in Analysis and Systems Development
      </Text>
      <Text style={styles.paragraph}>
        Secac Pernambuco College, Mar 2023 - Present.
      </Text>
      <Text style={styles.subheader}>Accelerated Training in Programming</Text>
      <Text style={styles.paragraph}>
        Softex Pernambuco, Jun 2023 - Jan 2024.
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: "#008080",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#008080",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#008080",
    alignSelf: "center",
    marginBottom: 20,
  },
});
