'use strict'
var assert = require("assert"),
    chai = require('chai'),
    sinon = require('sinon');
chai.should();

var CanonicalPath = require('../src/canonicalPath').canonicalPath;
describe("The Canonical path method", function(){  

  describe("Detects that the operating system is Windows", function(){
    var desiredUserDirectory = "C:\\Users\\Joe";
    var desiredCurrentDirectory = "C:\\GitHub\\project";
    var desiredParentDirectory = "C:\\GitHub"

    before(function(){
      var stubCanonicalPath = sinon.stub(CanonicalPath, "isPlatformWindows", () => true );
      stubCanonicalPath = sinon.stub(CanonicalPath, "getUserDirectory", () => desiredUserDirectory );
      stubCanonicalPath = sinon.stub(CanonicalPath, "getCurrentDirectory", () => desiredCurrentDirectory );
    });

    after(function(){
      sinon.restore(CanonicalPath);
    })

    it("Should be able to find the current directory", function(){
      
      var expectedPath = desiredCurrentDirectory;
      var actualPath = CanonicalPath.Get(".\\");
    actualPath.should.equal(expectedPath);
    });

    it("Should be able to find the current user's home directory", function(){
      var expectedPath = desiredUserDirectory;
      var actualPath = CanonicalPath.Get("~\\");
      actualPath.should.equal(expectedPath);
    });

    it("Should be able to find the parent directory", function(){
      var expectedPath = desiredParentDirectory;
      var actualPath = CanonicalPath.Get("..\\");
      actualPath.should.equal(expectedPath);
    });

    it("Should locate a subdirectory within the user's folder", function(){
      var expectedPath = desiredUserDirectory + "\\Documents";
      var actualPath = CanonicalPath.Get("~\\Documents");
      actualPath.should.equal(expectedPath);
    });

    it("Should locate a subdirectory under the same parent", function(){
      var expectedPath = desiredParentDirectory + "\\node_modules";
      var actualPath = CanonicalPath.Get("..\\node_modules");
      actualPath.should.equal(expectedPath);
    });
    
    it("Should locate a subdirectory within the user's folder", function(){
      var expectedPath = desiredUserDirectory + "\\Documents";
      var actualPath = CanonicalPath.Get("~\\Documents");
      actualPath.should.equal(expectedPath);
    });
  });

  describe("Detects that the operating system is NOT Windows", function(){
    var desiredUserDirectory = "/home/joe";
    var desiredCurrentDirectory = "/var/github/project";
    var desiredParentDirectory = "/var/github"

    before(function(){
      var stubCanonicalPath = sinon.stub(CanonicalPath, "isPlatformWindows", () => false );
      stubCanonicalPath = sinon.stub(CanonicalPath, "getUserDirectory", () => desiredUserDirectory );
      stubCanonicalPath = sinon.stub(CanonicalPath, "getCurrentDirectory", () => desiredCurrentDirectory );
    });

    after(function(){
      sinon.restore(CanonicalPath);
    })

    it("Should be able to find the current directory", function(){
      
      var expectedPath = desiredCurrentDirectory;
      var actualPath = CanonicalPath.Get("./");
      actualPath.should.equal(expectedPath);
    });

    it("Should be able to find the current user's home directory", function(){
      var expectedPath = desiredUserDirectory;
      var actualPath = CanonicalPath.Get("~/");
      actualPath.should.equal(expectedPath);
    });

    it("Should be able to find the parent directory", function(){
      var expectedPath = desiredParentDirectory;
      var actualPath = CanonicalPath.Get("../");
      actualPath.should.equal(expectedPath);
    });

    it("Should locate a subdirectory within the user's folder", function(){
      var expectedPath = desiredUserDirectory + "/Documents";
      var actualPath = CanonicalPath.Get("~/Documents");
      actualPath.should.equal(expectedPath);
    });

    it("Should locate a subdirectory under the same parent", function(){
      var expectedPath = desiredParentDirectory + "/node_modules";
      var actualPath = CanonicalPath.Get("../node_modules");
      actualPath.should.equal(expectedPath);
    });
    
    it("Should locate a subdirectory within the user's folder", function(){
      var expectedPath = desiredUserDirectory + "/Documents";
      var actualPath = CanonicalPath.Get("~/Documents");
      actualPath.should.equal(expectedPath);
    });
  });
});