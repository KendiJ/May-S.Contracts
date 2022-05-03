pragma solidity ^0.8.0;
/**
 * SPDX-License-Identifier: MIT
 */ 

contract May {

string public _name;
uint public _age;
string public _description;

  function setName(string memory newName) public {

  _name = newName;
  }

  function getName() public view returns (string memory)  {

  return _name;
  }

  function setAge(uint  newAge) public {

  _age= newAge;
  }

  function getAge() public view returns (uint ) {

  return _age;
  }
    function setDescription(string memory newDescr) public {

  _description = newDescr;
  }

  function getDescription() public view returns (string memory)  {

  return _description;
  }

}