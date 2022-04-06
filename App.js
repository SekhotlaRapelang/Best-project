import React from 'react';
import { View, Text,Image, StyleSheet, StatusBar,ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function App(){ 
  return (
    <>
    < StatusBar style='auto'/>
    <View style={StyleSheet.container}>
      <View appStatusBar style={styles.appStatusBar }>
        <View StatuBars style={styles.StatuBars}>
        <Text style={{left:90, top:-63, fontWeight:'bold', color:'white'}}> April 05 2022 </Text>
        <Ionicons style={styles.menuIcons} name="menu" size={30} color="white" />  
        
        
          
          
        <View CircleShape style={styles.CircleShape}>
        <Image 
         source={require("./assets/Me.jpg")}  
         style={{width: 105, height: 105, borderRadius: 1005/ 2}}  
         />
        </View>
        <View NamesModuls style={{marginEnd:60}}>
          <Text style={{marginTop:0,marginStart:16, color:'black', fontSize:15,backgroundColor:'#rgb(128, 216, 255)' }}> Name:Rapleng </Text>
          <Text style={{marginTop:2,marginStart:16, color:'black', fontSize:15,backgroundColor:'#rgb(128, 216, 255)e' }}>Surname:Sekhotla</Text> 
          <Text style={{marginTop:2,marginStart:16, color:'black', fontSize:15,backgroundColor:'#rgb(128, 216, 255)' }}>Student : 90101360</Text>
          <Text style={{marginTop:2,marginStart:16, color:'black', fontSize:15,backgroundColor:'#rgb(128, 216, 255)' }}>Faculty : FINT</Text>
          
        </View>
        <Ionicons style={styles.searchIcon} name="search" size={21} color="white" />
        </View>
        <Text style={{borderRadius:5,paddingVertical:2,paddingHorizontal:5, backgroundColor:'#rgb(128, 216, 255)',color:'black', fontSize:17,alignItems:'center',justifyContent:'center',margin:4}}>BSc in SoftWare Engeenering And Multimedia</Text>
        < ScrollView>
        <Text style={{fontSize: 20,marginStart:100}}> SEMESTER 1 </Text>
        <View style={styles.semesterOne}>
          <Text> MODULE                                             RESULTS</Text>
          <Text > Creative Studies and innovation    C+ </Text>
          <Text> Fundamentals of Design                 B- </Text>
          <Text> Business Communication               C- </Text>
          <Text> Algebra                                               B </Text>
          <Text> Principles of Programming C++     B </Text>
          <Text> Computer Skills                                 C </Text>
          <Text> Intro to Data Communication          B </Text>
          <Text style={{marginTop:3, color: 'black'}} > GPA                                                     CGPA </Text>
          <Text style={{color: 'black'}} > 2.89                                                     2.88 </Text>
          </View>
          <Text style={{fontSize: 20,marginStart:100}}> SEMESTERr 2 </Text>
          <View style={styles.semesterOne}>
          <Text> MODUL                                             RESULTS</Text>
          <Text> Calculs    C+ </Text>
          <Text> Fundamentals of Design                 B- </Text>
          <Text> Business Communication               C- </Text>
          <Text> Algebra                                               B </Text>
          <Text> Principles of Programming C++     B </Text>
          <Text> Computer Skills                                 C </Text>
          <Text> Intro to Data Communication          B </Text>
          <Text style={{marginTop:3, color: 'black'}} > GPA                                                     CGPA </Text>
          <Text style={{color: 'black'}} > 2.72                                                     2.88 </Text>
          </View>
          <Text style={{fontSize: 20,marginStart:100}}> SEMESTER 3 </Text>
          <View style={styles.semesterOne}>
          <Text> MODUL                                             RESULTS</Text>
          <Text> Calculus                                              A+ </Text>
          <Text> C++ ONE                                             A </Text>
          <Text> Web Design                                       A+ </Text>
          <Text> Datacommunication                        A+ </Text>
          <Text> Princeples of Software                   A </Text>
          <Text> Database                                           A </Text>
          <Text style={{marginTop:3, color: 'black'}} > GPA                                                     CGPA </Text>
          <Text style={{color: 'black'}} > 2.99                                                     3.4 </Text>
          </View>
          <Text style={{fontSize: 20,marginStart:100}}> SEMESTER 4 </Text>
          <View style={styles.semesterOne}>
          <Text> MODUL                                             RESULTS</Text>
          <Text> Statistics                                            NULL </Text>
          <Text> C++ Two                                            NULL </Text>
          <Text> Java One                                           NULL </Text>
          <Text> Mobile Device Programming         NULL </Text>
          <Text> Software Modelling                         NULL </Text>
          <Text> Database System                             NULL </Text>
          <Text style={{marginTop:3, color: 'black'}} > GPA                                                     CGPA </Text>
          <Text style={{color: 'black'}} > 2.99                                                     3.4 </Text>
          </View>
        </ScrollView>
      </View>
    </View>
    </>
  )
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appStatusBar:{
    height: 700,
    width: 360,
    backgroundColor: "#rgb(64, 196, 255)",
  },
  StatuBars: {
    flexDirection: 'row',
    padding:20,
    alignItems: 'center',
    justifyContent: 'center',   

  },
  CircleShape:{
    height: 105,
    width: 105,
    borderRadius: 105/2,
    marginTop:10,
    marginEnd:10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  semesterOne:{
    height:200,
    width:300,
    backgroundColor: '#rgb(128, 216, 255)',
    marginTop:10,
    marginStart:30,
  },
  menuIcons :
  {
    bottom:62,
    right:40,
    
  },
  searchIcon:{
    right: 60,
    bottom:62,
    backgroundColor:'#rgb(128, 216, 255)',
    borderRadius: 3,
    
  },



});
